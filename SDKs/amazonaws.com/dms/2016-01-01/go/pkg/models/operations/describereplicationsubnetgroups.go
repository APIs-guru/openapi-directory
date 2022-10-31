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
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplicationSubnetGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
