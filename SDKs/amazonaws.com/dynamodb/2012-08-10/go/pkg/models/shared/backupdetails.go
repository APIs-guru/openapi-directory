package shared

import (
"time")

type BackupDetails struct {
    BackupArn string `json:"BackupArn"`
    BackupCreationDateTime time.Time `json:"BackupCreationDateTime"`
    BackupExpiryDateTime *time.Time `json:"BackupExpiryDateTime,omitempty"`
    BackupName string `json:"BackupName"`
    BackupSizeBytes *int64 `json:"BackupSizeBytes,omitempty"`
    BackupStatus BackupStatusEnum `json:"BackupStatus"`
    BackupType BackupTypeEnum `json:"BackupType"`
    
}

