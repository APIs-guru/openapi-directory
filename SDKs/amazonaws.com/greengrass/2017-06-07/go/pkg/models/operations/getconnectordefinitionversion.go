package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectorDefinitionVersionPathParams struct {
	ConnectorDefinitionID        string `pathParam:"style=simple,explode=false,name=ConnectorDefinitionId"`
	ConnectorDefinitionVersionID string `pathParam:"style=simple,explode=false,name=ConnectorDefinitionVersionId"`
}

type GetConnectorDefinitionVersionQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetConnectorDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetConnectorDefinitionVersionRequest struct {
	PathParams  GetConnectorDefinitionVersionPathParams
	QueryParams GetConnectorDefinitionVersionQueryParams
	Headers     GetConnectorDefinitionVersionHeaders
}

type GetConnectorDefinitionVersionResponse struct {
	BadRequestException                   *interface{}
	ContentType                           string
	GetConnectorDefinitionVersionResponse *shared.GetConnectorDefinitionVersionResponse
	StatusCode                            int64
}
