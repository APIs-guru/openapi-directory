package shared

import (
	"time"
)

// Snapshot
// Describes a snapshot.
type Snapshot struct {
	DataEncryptionKeyID *string
	Description         *string
	Encrypted           *bool
	KmsKeyID            *string
	OutpostArn          *string
	OwnerAlias          *string
	OwnerID             *string
	Progress            *string
	SnapshotID          *string
	StartTime           *time.Time
	State               *SnapshotStateEnum
	StateMessage        *string
	Tags                []Tag
	VolumeID            *string
	VolumeSize          *int64
}
