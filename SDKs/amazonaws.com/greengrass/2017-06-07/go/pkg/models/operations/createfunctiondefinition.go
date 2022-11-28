package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFunctionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

// CreateFunctionDefinitionRequestBodyInitialVersion
// Information about a function definition version.
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
