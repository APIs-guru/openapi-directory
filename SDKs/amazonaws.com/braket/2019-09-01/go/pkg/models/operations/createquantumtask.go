package operations

import (
	"openapi/pkg/models/shared"
)

type CreateQuantumTaskHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateQuantumTaskRequestBody struct {
	Action            string            `json:"action"`
	ClientToken       string            `json:"clientToken"`
	DeviceArn         string            `json:"deviceArn"`
	DeviceParameters  *string           `json:"deviceParameters,omitempty"`
	OutputS3Bucket    string            `json:"outputS3Bucket"`
	OutputS3KeyPrefix string            `json:"outputS3KeyPrefix"`
	Shots             int64             `json:"shots"`
	Tags              map[string]string `json:"tags,omitempty"`
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
