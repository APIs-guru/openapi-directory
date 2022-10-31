package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeJobExecutionPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type DescribeJobExecutionQueryParams struct {
	ExecutionNumber *int64 `queryParam:"style=form,explode=true,name=executionNumber"`
}

type DescribeJobExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeJobExecutionRequest struct {
	PathParams  DescribeJobExecutionPathParams
	QueryParams DescribeJobExecutionQueryParams
	Headers     DescribeJobExecutionHeaders
}

type DescribeJobExecutionResponse struct {
	ContentType                  string
	DescribeJobExecutionResponse *shared.DescribeJobExecutionResponse
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
