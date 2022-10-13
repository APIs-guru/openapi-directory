package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVolumeFromBackupXAmzTargetEnum string

const (
	CreateVolumeFromBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateVolumeFromBackup CreateVolumeFromBackupXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup"
)

type CreateVolumeFromBackupHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateVolumeFromBackupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateVolumeFromBackupRequest struct {
	Headers CreateVolumeFromBackupHeaders
	Request shared.CreateVolumeFromBackupRequest `request:"mediaType=application/json"`
}

type CreateVolumeFromBackupResponse struct {
	BackupNotFound                 *interface{}
	BadRequest                     *interface{}
	ContentType                    string
	CreateVolumeFromBackupResponse *shared.CreateVolumeFromBackupResponse
	FileSystemNotFound             *interface{}
	IncompatibleParameterError     *interface{}
	InternalServerError            *interface{}
	MissingVolumeConfiguration     *interface{}
	ServiceLimitExceeded           *interface{}
	StatusCode                     int64
	StorageVirtualMachineNotFound  *interface{}
}
