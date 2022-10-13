package shared

import (
	"time"
)

type ListBackupsInput struct {
	BackupType              *BackupTypeFilterEnum `json:"BackupType"`
	ExclusiveStartBackupArn *string               `json:"ExclusiveStartBackupArn"`
	Limit                   *int64                `json:"Limit"`
	TableName               *string               `json:"TableName"`
	TimeRangeLowerBound     *time.Time            `json:"TimeRangeLowerBound"`
	TimeRangeUpperBound     *time.Time            `json:"TimeRangeUpperBound"`
}
