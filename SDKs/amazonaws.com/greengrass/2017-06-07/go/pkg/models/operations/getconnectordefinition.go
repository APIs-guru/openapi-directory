package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectorDefinitionPathParams struct {
	ConnectorDefinitionID string `pathParam:"style=simple,explode=false,name=ConnectorDefinitionId"`
}

type GetConnectorDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetConnectorDefinitionRequest struct {
	PathParams GetConnectorDefinitionPathParams
	Headers    GetConnectorDefinitionHeaders
}

type GetConnectorDefinitionResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	GetConnectorDefinitionResponse *shared.GetConnectorDefinitionResponse
	StatusCode                     int64
}
