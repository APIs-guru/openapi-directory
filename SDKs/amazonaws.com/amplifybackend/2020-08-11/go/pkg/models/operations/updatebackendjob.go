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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateBackendJobRequestBody struct {
	Operation *string `json:"operation,omitempty"`
	Status    *string `json:"status,omitempty"`
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
