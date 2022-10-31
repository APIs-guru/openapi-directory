package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplicationTasksQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeReplicationTasksXAmzTargetEnum string

const (
	DescribeReplicationTasksXAmzTargetEnumAmazonDmSv20160101DescribeReplicationTasks DescribeReplicationTasksXAmzTargetEnum = "AmazonDMSv20160101.DescribeReplicationTasks"
)

type DescribeReplicationTasksHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplicationTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeReplicationTasksRequest struct {
	QueryParams DescribeReplicationTasksQueryParams
	Headers     DescribeReplicationTasksHeaders
	Request     shared.DescribeReplicationTasksMessage `request:"mediaType=application/json"`
}

type DescribeReplicationTasksResponse struct {
	ContentType                      string
	DescribeReplicationTasksResponse *shared.DescribeReplicationTasksResponse
	ResourceNotFoundFault            *interface{}
	StatusCode                       int64
}
