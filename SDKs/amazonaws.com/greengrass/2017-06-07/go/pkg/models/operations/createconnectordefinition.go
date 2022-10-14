package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConnectorDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateConnectorDefinitionRequestBodyInitialVersion struct {
	Connectors []shared.Connector `json:"Connectors,omitempty"`
}

type CreateConnectorDefinitionRequestBody struct {
	InitialVersion *CreateConnectorDefinitionRequestBodyInitialVersion `json:"InitialVersion,omitempty"`
	Name           *string                                             `json:"Name,omitempty"`
	Tags           map[string]string                                   `json:"tags,omitempty"`
}

type CreateConnectorDefinitionRequest struct {
	Headers CreateConnectorDefinitionHeaders
	Request CreateConnectorDefinitionRequestBody `request:"mediaType=application/json"`
}

type CreateConnectorDefinitionResponse struct {
	BadRequestException               *interface{}
	ContentType                       string
	CreateConnectorDefinitionResponse *shared.CreateConnectorDefinitionResponse
	StatusCode                        int64
}
