package shared

import (
	"time"
)

type BackupDetails struct {
	BackupArn              string           `json:"BackupArn"`
	BackupCreationDateTime time.Time        `json:"BackupCreationDateTime"`
	BackupExpiryDateTime   *time.Time       `json:"BackupExpiryDateTime"`
	BackupName             string           `json:"BackupName"`
	BackupSizeBytes        *int64           `json:"BackupSizeBytes"`
	BackupStatus           BackupStatusEnum `json:"BackupStatus"`
	BackupType             BackupTypeEnum   `json:"BackupType"`
}
