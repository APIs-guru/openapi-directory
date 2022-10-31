package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePipelinePathParams struct {
	PipelineName string `pathParam:"style=simple,explode=false,name=pipelineName"`
}

type UpdatePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
