package operations

import (
	"openapi/pkg/models/shared"
)

type CancelQuantumTaskPathParams struct {
	QuantumTaskArn string `pathParam:"style=simple,explode=false,name=quantumTaskArn"`
}

type CancelQuantumTaskHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CancelQuantumTaskRequestBody struct {
	ClientToken string `json:"clientToken"`
}

type CancelQuantumTaskRequest struct {
	PathParams CancelQuantumTaskPathParams
	Headers    CancelQuantumTaskHeaders
	Request    CancelQuantumTaskRequestBody `request:"mediaType=application/json"`
}

type CancelQuantumTaskResponse struct {
	AccessDeniedException     *interface{}
	CancelQuantumTaskResponse *shared.CancelQuantumTaskResponse
	ConflictException         *interface{}
	ContentType               string
	InternalServiceException  *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
