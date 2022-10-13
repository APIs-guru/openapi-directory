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
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplicationTasksXAmzTargetEnum `header:"name=X-Amz-Target"`
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
