package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCoreDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
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
