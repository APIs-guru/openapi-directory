package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationResponsePathParams struct {
	HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
	RestapiID  string `pathParam:"style=simple,explode=false,name=restapi_id"`
	StatusCode string `pathParam:"style=simple,explode=false,name=status_code"`
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
	BadRequestException      *interface{}
	ContentType              string
	IntegrationResponse      *shared.IntegrationResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
