package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePipelinePathParams struct {
	PipelineName string `pathParam:"style=simple,explode=false,name=pipelineName"`
}

type DescribePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribePipelineRequest struct {
	PathParams DescribePipelinePathParams
	Headers    DescribePipelineHeaders
}

type DescribePipelineResponse struct {
	ContentType                 string
	DescribePipelineResponse    *shared.DescribePipelineResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
