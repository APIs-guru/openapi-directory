package shared

import (
	"time"
)

// VolumeAttachment
// Describes volume attachment details.
type VolumeAttachment struct {
	AttachTime          *time.Time
	DeleteOnTermination *bool
	Device              *string
	InstanceID          *string
	State               *VolumeAttachmentStateEnum
	VolumeID            *string
}
