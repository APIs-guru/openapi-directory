package shared

import (
	"time"
)

type Snapshot struct {
	DirectoryID *string             `json:"DirectoryId"`
	Name        *string             `json:"Name"`
	SnapshotID  *string             `json:"SnapshotId"`
	StartTime   *time.Time          `json:"StartTime"`
	Status      *SnapshotStatusEnum `json:"Status"`
	Type        *SnapshotTypeEnum   `json:"Type"`
}
