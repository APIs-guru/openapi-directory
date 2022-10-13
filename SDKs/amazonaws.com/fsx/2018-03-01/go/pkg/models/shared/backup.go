package shared

import (
	"time"
)

type Backup struct {
	BackupID             string                           `json:"BackupId"`
	CreationTime         time.Time                        `json:"CreationTime"`
	DirectoryInformation *ActiveDirectoryBackupAttributes `json:"DirectoryInformation"`
	FailureDetails       *BackupFailureDetails            `json:"FailureDetails"`
	FileSystem           FileSystem                       `json:"FileSystem"`
	KmsKeyID             *string                          `json:"KmsKeyId"`
	Lifecycle            BackupLifecycleEnum              `json:"Lifecycle"`
	OwnerID              *string                          `json:"OwnerId"`
	ProgressPercent      *int64                           `json:"ProgressPercent"`
	ResourceArn          *string                          `json:"ResourceARN"`
	ResourceType         *ResourceTypeEnum                `json:"ResourceType"`
	SourceBackupID       *string                          `json:"SourceBackupId"`
	SourceBackupRegion   *string                          `json:"SourceBackupRegion"`
	Tags                 []Tag                            `json:"Tags"`
	Type                 BackupTypeEnum                   `json:"Type"`
	Volume               *Volume                          `json:"Volume"`
}
