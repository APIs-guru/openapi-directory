package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBackupXAmzTargetEnum string

const (
	DeleteBackupXAmzTargetEnumDynamoDb20120810DeleteBackup DeleteBackupXAmzTargetEnum = "DynamoDB_20120810.DeleteBackup"
)

type DeleteBackupHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBackupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteBackupRequest struct {
	Headers DeleteBackupHeaders
	Request shared.DeleteBackupInput `request:"mediaType=application/json"`
}

type DeleteBackupResponse struct {
	BackupInUseException    *interface{}
	BackupNotFoundException *interface{}
	ContentType             string
	DeleteBackupOutput      *shared.DeleteBackupOutput
	InternalServerError     *interface{}
	LimitExceededException  *interface{}
	StatusCode              int64
}
