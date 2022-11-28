package shared

import (
	"time"
)

// EbsInstanceBlockDevice
// Describes a parameter used to set up an EBS volume in a block device mapping.
type EbsInstanceBlockDevice struct {
	AttachTime          *time.Time
	DeleteOnTermination *bool
	Status              *AttachmentStatusEnum
	VolumeID            *string
}
