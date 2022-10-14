package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFunctionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateFunctionDefinitionRequestBodyInitialVersion struct {
	DefaultConfig *shared.FunctionDefaultConfig `json:"DefaultConfig,omitempty"`
	Functions     []shared.Function             `json:"Functions,omitempty"`
}

type CreateFunctionDefinitionRequestBody struct {
	InitialVersion *CreateFunctionDefinitionRequestBodyInitialVersion `json:"InitialVersion,omitempty"`
	Name           *string                                            `json:"Name,omitempty"`
	Tags           map[string]string                                  `json:"tags,omitempty"`
}

type CreateFunctionDefinitionRequest struct {
	Headers CreateFunctionDefinitionHeaders
	Request CreateFunctionDefinitionRequestBody `request:"mediaType=application/json"`
}

type CreateFunctionDefinitionResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	CreateFunctionDefinitionResponse *shared.CreateFunctionDefinitionResponse
	StatusCode                       int64
}
