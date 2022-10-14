package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFileSystemPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type UpdateFileSystemHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFileSystemRequestBodyThroughputModeEnum string

const (
	UpdateFileSystemRequestBodyThroughputModeEnumBursting    UpdateFileSystemRequestBodyThroughputModeEnum = "bursting"
	UpdateFileSystemRequestBodyThroughputModeEnumProvisioned UpdateFileSystemRequestBodyThroughputModeEnum = "provisioned"
)

type UpdateFileSystemRequestBody struct {
	ProvisionedThroughputInMibps *float64                                       `json:"ProvisionedThroughputInMibps,omitempty"`
	ThroughputMode               *UpdateFileSystemRequestBodyThroughputModeEnum `json:"ThroughputMode,omitempty"`
}

type UpdateFileSystemRequest struct {
	PathParams UpdateFileSystemPathParams
	Headers    UpdateFileSystemHeaders
	Request    UpdateFileSystemRequestBody `request:"mediaType=application/json"`
}

type UpdateFileSystemResponse struct {
	BadRequest                        *interface{}
	ContentType                       string
	FileSystemDescription             *shared.FileSystemDescription
	FileSystemNotFound                *interface{}
	IncorrectFileSystemLifeCycleState *interface{}
	InsufficientThroughputCapacity    *interface{}
	InternalServerError               *interface{}
	StatusCode                        int64
	ThroughputLimitExceeded           *interface{}
	TooManyRequests                   *interface{}
}
