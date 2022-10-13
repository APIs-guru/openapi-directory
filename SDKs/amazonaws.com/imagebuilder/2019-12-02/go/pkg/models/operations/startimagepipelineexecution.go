package operations

import (
	"openapi/pkg/models/shared"
)

type StartImagePipelineExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartImagePipelineExecutionRequestBody struct {
	ClientToken      string `json:"clientToken"`
	ImagePipelineArn string `json:"imagePipelineArn"`
}

type StartImagePipelineExecutionRequest struct {
	Headers StartImagePipelineExecutionHeaders
	Request StartImagePipelineExecutionRequestBody `request:"mediaType=application/json"`
}

type StartImagePipelineExecutionResponse struct {
	CallRateLimitExceededException       *interface{}
	ClientException                      *interface{}
	ContentType                          string
	ForbiddenException                   *interface{}
	IdempotentParameterMismatchException *interface{}
	InvalidRequestException              *interface{}
	ResourceInUseException               *interface{}
	ResourceNotFoundException            *interface{}
	ServiceException                     *interface{}
	ServiceUnavailableException          *interface{}
	StartImagePipelineExecutionResponse  *shared.StartImagePipelineExecutionResponse
	StatusCode                           int64
}
