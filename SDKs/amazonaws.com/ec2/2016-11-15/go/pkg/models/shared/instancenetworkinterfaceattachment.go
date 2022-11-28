package shared

import (
	"time"
)

// InstanceNetworkInterfaceAttachment
// Describes a network interface attachment.
type InstanceNetworkInterfaceAttachment struct {
	AttachTime          *time.Time
	AttachmentID        *string
	DeleteOnTermination *bool
	DeviceIndex         *int64
	NetworkCardIndex    *int64
	Status              *AttachmentStatusEnum
}
