package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationPathParams struct {
	HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
	RestapiID  string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetIntegrationRequest struct {
	PathParams GetIntegrationPathParams
	Headers    GetIntegrationHeaders
}

type GetIntegrationResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	Integration              *shared.Integration
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
