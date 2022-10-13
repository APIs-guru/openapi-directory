package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackendJobPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
	JobID                  string `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetBackendJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBackendJobRequest struct {
	PathParams GetBackendJobPathParams
	Headers    GetBackendJobHeaders
}

type GetBackendJobResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	GetBackendJobResponse    *shared.GetBackendJobResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
