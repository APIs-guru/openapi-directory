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
	Connectors []shared.Connector `json:"Connectors"`
}

type CreateConnectorDefinitionRequestBody struct {
	InitialVersion *CreateConnectorDefinitionRequestBodyInitialVersion `json:"InitialVersion"`
	Name           *string                                             `json:"Name"`
	Tags           map[string]string                                   `json:"tags"`
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
