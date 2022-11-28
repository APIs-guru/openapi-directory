package shared

import (
	"time"
)

// DestinationBackup
// Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.
type DestinationBackup struct {
	CreateTimestamp *time.Time `json:"CreateTimestamp,omitempty"`
	SourceBackup    *string    `json:"SourceBackup,omitempty"`
	SourceCluster   *string    `json:"SourceCluster,omitempty"`
	SourceRegion    *string    `json:"SourceRegion,omitempty"`
}
