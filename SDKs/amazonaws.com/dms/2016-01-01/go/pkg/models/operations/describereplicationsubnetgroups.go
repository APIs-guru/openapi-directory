package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplicationSubnetGroupsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeReplicationSubnetGroupsXAmzTargetEnum string

const (
	DescribeReplicationSubnetGroupsXAmzTargetEnumAmazonDmSv20160101DescribeReplicationSubnetGroups DescribeReplicationSubnetGroupsXAmzTargetEnum = "AmazonDMSv20160101.DescribeReplicationSubnetGroups"
)

type DescribeReplicationSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplicationSubnetGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReplicationSubnetGroupsRequest struct {
	QueryParams DescribeReplicationSubnetGroupsQueryParams
	Headers     DescribeReplicationSubnetGroupsHeaders
	Request     shared.DescribeReplicationSubnetGroupsMessage `request:"mediaType=application/json"`
}

type DescribeReplicationSubnetGroupsResponse struct {
	ContentType                             string
	DescribeReplicationSubnetGroupsResponse *shared.DescribeReplicationSubnetGroupsResponse
	ResourceNotFoundFault                   *interface{}
	StatusCode                              int64
}
