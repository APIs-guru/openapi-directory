package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePipelinePathParams struct {
	PipelineName string `pathParam:"style=simple,explode=false,name=pipelineName"`
}

type UpdatePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdatePipelineRequestBody struct {
	PipelineActivities []shared.PipelineActivity `json:"pipelineActivities"`
}

type UpdatePipelineRequest struct {
	PathParams UpdatePipelinePathParams
	Headers    UpdatePipelineHeaders
	Request    UpdatePipelineRequestBody `request:"mediaType=application/json"`
}

type UpdatePipelineResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
