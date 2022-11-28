package shared

import (
	"time"
)

// Snapshot
// Describes a directory snapshot.
type Snapshot struct {
	DirectoryID *string             `json:"DirectoryId,omitempty"`
	Name        *string             `json:"Name,omitempty"`
	SnapshotID  *string             `json:"SnapshotId,omitempty"`
	StartTime   *time.Time          `json:"StartTime,omitempty"`
	Status      *SnapshotStatusEnum `json:"Status,omitempty"`
	Type        *SnapshotTypeEnum   `json:"Type,omitempty"`
}
