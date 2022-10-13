package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBackendEnvironmentPathParams struct {
	AppID           string `pathParam:"style=simple,explode=false,name=appId"`
	EnvironmentName string `pathParam:"style=simple,explode=false,name=environmentName"`
}

type DeleteBackendEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteBackendEnvironmentRequest struct {
	PathParams DeleteBackendEnvironmentPathParams
	Headers    DeleteBackendEnvironmentHeaders
}

type DeleteBackendEnvironmentResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	DeleteBackendEnvironmentResult   *shared.DeleteBackendEnvironmentResult
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
}
