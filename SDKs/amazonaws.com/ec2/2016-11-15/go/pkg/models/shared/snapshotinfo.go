package shared

import (
	"time"
)

// SnapshotInfo
// Information about a snapshot.
type SnapshotInfo struct {
	Description *string
	Encrypted   *bool
	OutpostArn  *string
	OwnerID     *string
	Progress    *string
	SnapshotID  *string
	StartTime   *time.Time
	State       *SnapshotStateEnum
	Tags        []Tag
	VolumeID    *string
	VolumeSize  *int64
}
