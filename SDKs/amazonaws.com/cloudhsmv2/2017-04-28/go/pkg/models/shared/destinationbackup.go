package shared

import (
"time")

type DestinationBackup struct {
    CreateTimestamp *time.Time `json:"CreateTimestamp,omitempty"`
    SourceBackup *string `json:"SourceBackup,omitempty"`
    SourceCluster *string `json:"SourceCluster,omitempty"`
    SourceRegion *string `json:"SourceRegion,omitempty"`
    
}

