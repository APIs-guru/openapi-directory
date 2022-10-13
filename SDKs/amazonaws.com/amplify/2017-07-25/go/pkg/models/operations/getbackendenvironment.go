package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackendEnvironmentPathParams struct {
	AppID           string `pathParam:"style=simple,explode=false,name=appId"`
	EnvironmentName string `pathParam:"style=simple,explode=false,name=environmentName"`
}

type GetBackendEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBackendEnvironmentRequest struct {
	PathParams GetBackendEnvironmentPathParams
	Headers    GetBackendEnvironmentHeaders
}

type GetBackendEnvironmentResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetBackendEnvironmentResult *shared.GetBackendEnvironmentResult
	InternalFailureException    *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	UnauthorizedException       *interface{}
}
