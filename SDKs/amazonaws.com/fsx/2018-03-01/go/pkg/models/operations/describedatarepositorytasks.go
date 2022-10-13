package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDataRepositoryTasksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeDataRepositoryTasksXAmzTargetEnum string

const (
	DescribeDataRepositoryTasksXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeDataRepositoryTasks DescribeDataRepositoryTasksXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks"
)

type DescribeDataRepositoryTasksHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDataRepositoryTasksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDataRepositoryTasksRequest struct {
	QueryParams DescribeDataRepositoryTasksQueryParams
	Headers     DescribeDataRepositoryTasksHeaders
	Request     shared.DescribeDataRepositoryTasksRequest `request:"mediaType=application/json"`
}

type DescribeDataRepositoryTasksResponse struct {
	BadRequest                          *interface{}
	ContentType                         string
	DataRepositoryTaskNotFound          *interface{}
	DescribeDataRepositoryTasksResponse *shared.DescribeDataRepositoryTasksResponse
	FileSystemNotFound                  *interface{}
	InternalServerError                 *interface{}
	StatusCode                          int64
}
