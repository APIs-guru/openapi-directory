package shared

import (
	"time"
)

type ListBackupsInput struct {
	BackupType              *BackupTypeFilterEnum `json:"BackupType,omitempty"`
	ExclusiveStartBackupArn *string               `json:"ExclusiveStartBackupArn,omitempty"`
	Limit                   *int64                `json:"Limit,omitempty"`
	TableName               *string               `json:"TableName,omitempty"`
	TimeRangeLowerBound     *time.Time            `json:"TimeRangeLowerBound,omitempty"`
	TimeRangeUpperBound     *time.Time            `json:"TimeRangeUpperBound,omitempty"`
}
