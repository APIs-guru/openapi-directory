package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFileSystemHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFileSystemRequestBodyPerformanceModeEnum string

const (
	CreateFileSystemRequestBodyPerformanceModeEnumGeneralPurpose CreateFileSystemRequestBodyPerformanceModeEnum = "generalPurpose"
	CreateFileSystemRequestBodyPerformanceModeEnumMaxIo          CreateFileSystemRequestBodyPerformanceModeEnum = "maxIO"
)

type CreateFileSystemRequestBodyThroughputModeEnum string

const (
	CreateFileSystemRequestBodyThroughputModeEnumBursting    CreateFileSystemRequestBodyThroughputModeEnum = "bursting"
	CreateFileSystemRequestBodyThroughputModeEnumProvisioned CreateFileSystemRequestBodyThroughputModeEnum = "provisioned"
)

type CreateFileSystemRequestBody struct {
	AvailabilityZoneName         *string                                         `json:"AvailabilityZoneName,omitempty"`
	Backup                       *bool                                           `json:"Backup,omitempty"`
	CreationToken                string                                          `json:"CreationToken"`
	Encrypted                    *bool                                           `json:"Encrypted,omitempty"`
	KmsKeyID                     *string                                         `json:"KmsKeyId,omitempty"`
	PerformanceMode              *CreateFileSystemRequestBodyPerformanceModeEnum `json:"PerformanceMode,omitempty"`
	ProvisionedThroughputInMibps *float64                                        `json:"ProvisionedThroughputInMibps,omitempty"`
	Tags                         []shared.Tag                                    `json:"Tags,omitempty"`
	ThroughputMode               *CreateFileSystemRequestBodyThroughputModeEnum  `json:"ThroughputMode,omitempty"`
}

type CreateFileSystemRequest struct {
	Headers CreateFileSystemHeaders
	Request CreateFileSystemRequestBody `request:"mediaType=application/json"`
}

type CreateFileSystemResponse struct {
	BadRequest                     *interface{}
	ContentType                    string
	FileSystemAlreadyExists        *interface{}
	FileSystemDescription          *shared.FileSystemDescription
	FileSystemLimitExceeded        *interface{}
	InsufficientThroughputCapacity *interface{}
	InternalServerError            *interface{}
	StatusCode                     int64
	ThroughputLimitExceeded        *interface{}
	UnsupportedAvailabilityZone    *interface{}
}
