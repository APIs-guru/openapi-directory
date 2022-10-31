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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
