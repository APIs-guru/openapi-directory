package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBackendRequestBody struct {
	AppID                  string                 `json:"appId"`
	AppName                string                 `json:"appName"`
	BackendEnvironmentName string                 `json:"backendEnvironmentName"`
	ResourceConfig         map[string]interface{} `json:"resourceConfig"`
	ResourceName           *string                `json:"resourceName"`
}

type CreateBackendRequest struct {
	Headers CreateBackendHeaders
	Request CreateBackendRequestBody `request:"mediaType=application/json"`
}

type CreateBackendResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	CreateBackendResponse    *shared.CreateBackendResponse
	GatewayTimeoutException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
