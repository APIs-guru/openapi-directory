package shared

import (
	"time"
)

type DestinationBackup struct {
	CreateTimestamp *time.Time `json:"CreateTimestamp"`
	SourceBackup    *string    `json:"SourceBackup"`
	SourceCluster   *string    `json:"SourceCluster"`
	SourceRegion    *string    `json:"SourceRegion"`
}
