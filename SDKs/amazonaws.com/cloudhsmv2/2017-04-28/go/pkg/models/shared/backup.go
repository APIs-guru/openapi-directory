package shared

import (
	"time"
)

// Backup
// Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.
type Backup struct {
	BackupID        string           `json:"BackupId"`
	BackupState     *BackupStateEnum `json:"BackupState,omitempty"`
	ClusterID       *string          `json:"ClusterId,omitempty"`
	CopyTimestamp   *time.Time       `json:"CopyTimestamp,omitempty"`
	CreateTimestamp *time.Time       `json:"CreateTimestamp,omitempty"`
	DeleteTimestamp *time.Time       `json:"DeleteTimestamp,omitempty"`
	NeverExpires    *bool            `json:"NeverExpires,omitempty"`
	SourceBackup    *string          `json:"SourceBackup,omitempty"`
	SourceCluster   *string          `json:"SourceCluster,omitempty"`
	SourceRegion    *string          `json:"SourceRegion,omitempty"`
	TagList         []Tag            `json:"TagList,omitempty"`
}
