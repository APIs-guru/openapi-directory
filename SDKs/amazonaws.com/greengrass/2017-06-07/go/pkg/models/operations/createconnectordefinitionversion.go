package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConnectorDefinitionVersionPathParams struct {
	ConnectorDefinitionID string `pathParam:"style=simple,explode=false,name=ConnectorDefinitionId"`
}

type CreateConnectorDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateConnectorDefinitionVersionRequestBody struct {
	Connectors []shared.Connector `json:"Connectors,omitempty"`
}

type CreateConnectorDefinitionVersionRequest struct {
	PathParams CreateConnectorDefinitionVersionPathParams
	Headers    CreateConnectorDefinitionVersionHeaders
	Request    CreateConnectorDefinitionVersionRequestBody `request:"mediaType=application/json"`
}

type CreateConnectorDefinitionVersionResponse struct {
	BadRequestException                      *interface{}
	ContentType                              string
	CreateConnectorDefinitionVersionResponse *shared.CreateConnectorDefinitionVersionResponse
	StatusCode                               int64
}
