package shared

import (
	"time"
)

type BackupSummary struct {
	BackupArn              *string           `json:"BackupArn"`
	BackupCreationDateTime *time.Time        `json:"BackupCreationDateTime"`
	BackupExpiryDateTime   *time.Time        `json:"BackupExpiryDateTime"`
	BackupName             *string           `json:"BackupName"`
	BackupSizeBytes        *int64            `json:"BackupSizeBytes"`
	BackupStatus           *BackupStatusEnum `json:"BackupStatus"`
	BackupType             *BackupTypeEnum   `json:"BackupType"`
	TableArn               *string           `json:"TableArn"`
	TableID                *string           `json:"TableId"`
	TableName              *string           `json:"TableName"`
}
