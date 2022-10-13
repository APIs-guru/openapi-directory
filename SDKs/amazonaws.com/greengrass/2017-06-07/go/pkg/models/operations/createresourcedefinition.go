package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateResourceDefinitionRequestBodyInitialVersion struct {
	Resources []shared.Resource `json:"Resources"`
}

type CreateResourceDefinitionRequestBody struct {
	InitialVersion *CreateResourceDefinitionRequestBodyInitialVersion `json:"InitialVersion"`
	Name           *string                                            `json:"Name"`
	Tags           map[string]string                                  `json:"tags"`
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
