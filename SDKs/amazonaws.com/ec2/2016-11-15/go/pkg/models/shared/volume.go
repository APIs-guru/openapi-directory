package shared

import (
	"time"
)

// Volume
// Describes a volume.
type Volume struct {
	Attachments        []VolumeAttachment
	AvailabilityZone   *string
	CreateTime         *time.Time
	Encrypted          *bool
	FastRestored       *bool
	Iops               *int64
	KmsKeyID           *string
	MultiAttachEnabled *bool
	OutpostArn         *string
	Size               *int64
	SnapshotID         *string
	State              *VolumeStateEnum
	Tags               []Tag
	Throughput         *int64
	VolumeID           *string
	VolumeType         *VolumeTypeEnum
}
