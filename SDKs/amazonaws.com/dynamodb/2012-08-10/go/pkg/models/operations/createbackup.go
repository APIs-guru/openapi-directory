package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackupXAmzTargetEnum string

const (
	CreateBackupXAmzTargetEnumDynamoDb20120810CreateBackup CreateBackupXAmzTargetEnum = "DynamoDB_20120810.CreateBackup"
)

type CreateBackupHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBackupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateBackupRequest struct {
	Headers CreateBackupHeaders
	Request shared.CreateBackupInput `request:"mediaType=application/json"`
}

type CreateBackupResponse struct {
	BackupInUseException                  *interface{}
	ContentType                           string
	ContinuousBackupsUnavailableException *interface{}
	CreateBackupOutput                    *shared.CreateBackupOutput
	InternalServerError                   *interface{}
	LimitExceededException                *interface{}
	StatusCode                            int64
	TableInUseException                   *interface{}
	TableNotFoundException                *interface{}
}
