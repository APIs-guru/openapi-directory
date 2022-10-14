package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCoreDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateCoreDefinitionRequestBodyInitialVersion struct {
	Cores []shared.Core `json:"Cores,omitempty"`
}

type CreateCoreDefinitionRequestBody struct {
	InitialVersion *CreateCoreDefinitionRequestBodyInitialVersion `json:"InitialVersion,omitempty"`
	Name           *string                                        `json:"Name,omitempty"`
	Tags           map[string]string                              `json:"tags,omitempty"`
}

type CreateCoreDefinitionRequest struct {
	Headers CreateCoreDefinitionHeaders
	Request CreateCoreDefinitionRequestBody `request:"mediaType=application/json"`
}

type CreateCoreDefinitionResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateCoreDefinitionResponse *shared.CreateCoreDefinitionResponse
	StatusCode                   int64
}
