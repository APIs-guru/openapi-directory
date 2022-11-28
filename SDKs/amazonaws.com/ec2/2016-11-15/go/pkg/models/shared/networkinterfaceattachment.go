package shared

import (
	"time"
)

// NetworkInterfaceAttachment
// Describes a network interface attachment.
type NetworkInterfaceAttachment struct {
	AttachTime          *time.Time
	AttachmentID        *string
	DeleteOnTermination *bool
	DeviceIndex         *int64
	InstanceID          *string
	InstanceOwnerID     *string
	NetworkCardIndex    *int64
	Status              *AttachmentStatusEnum
}
