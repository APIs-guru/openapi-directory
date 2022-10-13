package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePipelineRequestBody struct {
	PipelineActivities []shared.PipelineActivity `json:"pipelineActivities"`
	PipelineName       string                    `json:"pipelineName"`
	Tags               []shared.Tag              `json:"tags"`
}

type CreatePipelineRequest struct {
	Headers CreatePipelineHeaders
	Request CreatePipelineRequestBody `request:"mediaType=application/json"`
}

type CreatePipelineResponse struct {
	ContentType                    string
	CreatePipelineResponse         *shared.CreatePipelineResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
