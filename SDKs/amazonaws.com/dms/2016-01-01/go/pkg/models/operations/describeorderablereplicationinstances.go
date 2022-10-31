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
	XAmzAlgorithm     *string                                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeOrderableReplicationInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
