package operations

import (
	"openapi/pkg/models/shared"
)

type PutBackupPolicyPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type PutBackupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutBackupPolicyRequestBodyBackupPolicy
// The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
type PutBackupPolicyRequestBodyBackupPolicy struct {
	Status *shared.StatusEnum `json:"Status,omitempty"`
}

type PutBackupPolicyRequestBody struct {
	BackupPolicy PutBackupPolicyRequestBodyBackupPolicy `json:"BackupPolicy"`
}

type PutBackupPolicyRequest struct {
	PathParams PutBackupPolicyPathParams
	Headers    PutBackupPolicyHeaders
	Request    PutBackupPolicyRequestBody `request:"mediaType=application/json"`
}

type PutBackupPolicyResponse struct {
	BackupPolicyDescription           *shared.BackupPolicyDescription
	BadRequest                        *interface{}
	ContentType                       string
	FileSystemNotFound                *interface{}
	IncorrectFileSystemLifeCycleState *interface{}
	InternalServerError               *interface{}
	StatusCode                        int64
	ValidationException               *interface{}
}
