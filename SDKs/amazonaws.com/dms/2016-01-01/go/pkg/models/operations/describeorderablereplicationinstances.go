package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeOrderableReplicationInstancesQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeOrderableReplicationInstancesXAmzTargetEnum string

const (
	DescribeOrderableReplicationInstancesXAmzTargetEnumAmazonDmSv20160101DescribeOrderableReplicationInstances DescribeOrderableReplicationInstancesXAmzTargetEnum = "AmazonDMSv20160101.DescribeOrderableReplicationInstances"
)

type DescribeOrderableReplicationInstancesHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOrderableReplicationInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeOrderableReplicationInstancesRequest struct {
	QueryParams DescribeOrderableReplicationInstancesQueryParams
	Headers     DescribeOrderableReplicationInstancesHeaders
	Request     shared.DescribeOrderableReplicationInstancesMessage `request:"mediaType=application/json"`
}

type DescribeOrderableReplicationInstancesResponse struct {
	ContentType                                   string
	DescribeOrderableReplicationInstancesResponse *shared.DescribeOrderableReplicationInstancesResponse
	StatusCode                                    int64
}
