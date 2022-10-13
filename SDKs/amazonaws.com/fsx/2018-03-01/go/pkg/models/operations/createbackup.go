package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackupXAmzTargetEnum string

const (
	CreateBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateBackup CreateBackupXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CreateBackup"
)

type CreateBackupHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBackupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateBackupRequest struct {
	Headers CreateBackupHeaders
	Request shared.CreateBackupRequest `request:"mediaType=application/json"`
}

type CreateBackupResponse struct {
	BackupInProgress           *interface{}
	BadRequest                 *interface{}
	ContentType                string
	CreateBackupResponse       *shared.CreateBackupResponse
	FileSystemNotFound         *interface{}
	IncompatibleParameterError *interface{}
	InternalServerError        *interface{}
	ServiceLimitExceeded       *interface{}
	StatusCode                 int64
	UnsupportedOperation       *interface{}
	VolumeNotFound             *interface{}
}
