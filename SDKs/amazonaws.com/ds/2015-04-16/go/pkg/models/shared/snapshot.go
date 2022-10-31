package shared

import (
"time")

type Snapshot struct {
    DirectoryID *string `json:"DirectoryId,omitempty"`
    Name *string `json:"Name,omitempty"`
    SnapshotID *string `json:"SnapshotId,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Status *SnapshotStatusEnum `json:"Status,omitempty"`
    Type *SnapshotTypeEnum `json:"Type,omitempty"`
    
}

