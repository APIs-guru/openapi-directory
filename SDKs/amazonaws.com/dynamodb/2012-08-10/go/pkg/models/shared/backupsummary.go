package shared

import (
	"time"
)

// BackupSummary
// Contains details for the backup.
type BackupSummary struct {
	BackupArn              *string           `json:"BackupArn,omitempty"`
	BackupCreationDateTime *time.Time        `json:"BackupCreationDateTime,omitempty"`
	BackupExpiryDateTime   *time.Time        `json:"BackupExpiryDateTime,omitempty"`
	BackupName             *string           `json:"BackupName,omitempty"`
	BackupSizeBytes        *int64            `json:"BackupSizeBytes,omitempty"`
	BackupStatus           *BackupStatusEnum `json:"BackupStatus,omitempty"`
	BackupType             *BackupTypeEnum   `json:"BackupType,omitempty"`
	TableArn               *string           `json:"TableArn,omitempty"`
	TableID                *string           `json:"TableId,omitempty"`
	TableName              *string           `json:"TableName,omitempty"`
}
