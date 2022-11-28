package shared

// VolumeStatusItem
// Describes the volume status.
type VolumeStatusItem struct {
	Actions            []VolumeStatusAction
	AttachmentStatuses []VolumeStatusAttachmentStatus
	AvailabilityZone   *string
	Events             []VolumeStatusEvent
	OutpostArn         *string
	VolumeID           *string
	VolumeStatus       *VolumeStatusInfo
}
