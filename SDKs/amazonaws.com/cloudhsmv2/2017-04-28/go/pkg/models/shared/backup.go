package shared

import (
	"time"
)

type Backup struct {
	BackupID        string           `json:"BackupId"`
	BackupState     *BackupStateEnum `json:"BackupState"`
	ClusterID       *string          `json:"ClusterId"`
	CopyTimestamp   *time.Time       `json:"CopyTimestamp"`
	CreateTimestamp *time.Time       `json:"CreateTimestamp"`
	DeleteTimestamp *time.Time       `json:"DeleteTimestamp"`
	NeverExpires    *bool            `json:"NeverExpires"`
	SourceBackup    *string          `json:"SourceBackup"`
	SourceCluster   *string          `json:"SourceCluster"`
	SourceRegion    *string          `json:"SourceRegion"`
	TagList         []Tag            `json:"TagList"`
}
