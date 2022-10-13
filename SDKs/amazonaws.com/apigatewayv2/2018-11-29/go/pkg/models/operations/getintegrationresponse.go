package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationResponsePathParams struct {
	APIID                 string `pathParam:"style=simple,explode=false,name=apiId"`
	IntegrationID         string `pathParam:"style=simple,explode=false,name=integrationId"`
	IntegrationResponseID string `pathParam:"style=simple,explode=false,name=integrationResponseId"`
}

type GetIntegrationResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetIntegrationResponseRequest struct {
	PathParams GetIntegrationResponsePathParams
	Headers    GetIntegrationResponseHeaders
}

type GetIntegrationResponseResponse struct {
	ContentType                    string
	GetIntegrationResponseResponse *shared.GetIntegrationResponseResponse
	NotFoundException              *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
