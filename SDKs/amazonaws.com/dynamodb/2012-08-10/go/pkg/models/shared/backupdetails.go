package shared

import (
	"time"
)

// BackupDetails
// Contains the details of the backup created for the table.
type BackupDetails struct {
	BackupArn              string           `json:"BackupArn"`
	BackupCreationDateTime time.Time        `json:"BackupCreationDateTime"`
	BackupExpiryDateTime   *time.Time       `json:"BackupExpiryDateTime,omitempty"`
	BackupName             string           `json:"BackupName"`
	BackupSizeBytes        *int64           `json:"BackupSizeBytes,omitempty"`
	BackupStatus           BackupStatusEnum `json:"BackupStatus"`
	BackupType             BackupTypeEnum   `json:"BackupType"`
}
