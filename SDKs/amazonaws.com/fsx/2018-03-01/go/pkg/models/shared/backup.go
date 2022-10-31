package shared

import (
"time")

type Backup struct {
    BackupID string `json:"BackupId"`
    CreationTime time.Time `json:"CreationTime"`
    DirectoryInformation *ActiveDirectoryBackupAttributes `json:"DirectoryInformation,omitempty"`
    FailureDetails *BackupFailureDetails `json:"FailureDetails,omitempty"`
    FileSystem FileSystem `json:"FileSystem"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    Lifecycle BackupLifecycleEnum `json:"Lifecycle"`
    OwnerID *string `json:"OwnerId,omitempty"`
    ProgressPercent *int64 `json:"ProgressPercent,omitempty"`
    ResourceArn *string `json:"ResourceARN,omitempty"`
    ResourceType *ResourceTypeEnum `json:"ResourceType,omitempty"`
    SourceBackupID *string `json:"SourceBackupId,omitempty"`
    SourceBackupRegion *string `json:"SourceBackupRegion,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Type BackupTypeEnum `json:"Type"`
    Volume *Volume `json:"Volume,omitempty"`
    
}

