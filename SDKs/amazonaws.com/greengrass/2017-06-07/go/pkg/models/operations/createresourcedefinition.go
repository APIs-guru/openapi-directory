package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

type CreateResourceDefinitionRequestBodyInitialVersion struct {
	Resources []shared.Resource `json:"Resources,omitempty"`
}

type CreateResourceDefinitionRequestBody struct {
	InitialVersion *CreateResourceDefinitionRequestBodyInitialVersion `json:"InitialVersion,omitempty"`
	Name           *string                                            `json:"Name,omitempty"`
	Tags           map[string]string                                  `json:"tags,omitempty"`
}

type CreateResourceDefinitionRequest struct {
	Headers CreateResourceDefinitionHeaders
	Request CreateResourceDefinitionRequestBody `request:"mediaType=application/json"`
}

type CreateResourceDefinitionResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	CreateResourceDefinitionResponse *shared.CreateResourceDefinitionResponse
	StatusCode                       int64
}
