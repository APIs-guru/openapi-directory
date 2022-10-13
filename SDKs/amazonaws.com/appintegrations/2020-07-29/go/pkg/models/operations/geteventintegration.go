package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventIntegrationPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type GetEventIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEventIntegrationRequest struct {
	PathParams GetEventIntegrationPathParams
	Headers    GetEventIntegrationHeaders
}

type GetEventIntegrationResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	GetEventIntegrationResponse *shared.GetEventIntegrationResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
