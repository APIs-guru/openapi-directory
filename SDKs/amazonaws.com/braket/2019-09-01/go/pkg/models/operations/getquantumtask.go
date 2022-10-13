package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuantumTaskPathParams struct {
	QuantumTaskArn string `pathParam:"style=simple,explode=false,name=quantumTaskArn"`
}

type GetQuantumTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetQuantumTaskRequest struct {
	PathParams GetQuantumTaskPathParams
	Headers    GetQuantumTaskHeaders
}

type GetQuantumTaskResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetQuantumTaskResponse    *shared.GetQuantumTaskResponse
	InternalServiceException  *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
