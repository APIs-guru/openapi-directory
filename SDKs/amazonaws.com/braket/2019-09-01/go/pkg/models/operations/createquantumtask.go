package operations

import (
	"openapi/pkg/models/shared"
)

type CreateQuantumTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateQuantumTaskRequestBody struct {
	Action            string            `json:"action"`
	ClientToken       string            `json:"clientToken"`
	DeviceArn         string            `json:"deviceArn"`
	DeviceParameters  *string           `json:"deviceParameters"`
	OutputS3Bucket    string            `json:"outputS3Bucket"`
	OutputS3KeyPrefix string            `json:"outputS3KeyPrefix"`
	Shots             int64             `json:"shots"`
	Tags              map[string]string `json:"tags"`
}

type CreateQuantumTaskRequest struct {
	Headers CreateQuantumTaskHeaders
	Request CreateQuantumTaskRequestBody `request:"mediaType=application/json"`
}

type CreateQuantumTaskResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	CreateQuantumTaskResponse     *shared.CreateQuantumTaskResponse
	DeviceOfflineException        *interface{}
	InternalServiceException      *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
