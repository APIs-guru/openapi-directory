package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBackendJobPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
	JobID                  string `pathParam:"style=simple,explode=false,name=jobId"`
}

type UpdateBackendJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateBackendJobRequestBody struct {
	Operation *string `json:"operation"`
	Status    *string `json:"status"`
}

type UpdateBackendJobRequest struct {
	PathParams UpdateBackendJobPathParams
	Headers    UpdateBackendJobHeaders
	Request    UpdateBackendJobRequestBody `request:"mediaType=application/json"`
}

type UpdateBackendJobResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateBackendJobResponse *shared.UpdateBackendJobResponse
}
