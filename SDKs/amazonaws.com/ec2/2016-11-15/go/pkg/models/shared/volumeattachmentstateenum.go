package shared

type VolumeAttachmentStateEnum string

const (
	VolumeAttachmentStateEnumAttaching VolumeAttachmentStateEnum = "attaching"
	VolumeAttachmentStateEnumAttached  VolumeAttachmentStateEnum = "attached"
	VolumeAttachmentStateEnumDetaching VolumeAttachmentStateEnum = "detaching"
	VolumeAttachmentStateEnumDetached  VolumeAttachmentStateEnum = "detached"
	VolumeAttachmentStateEnumBusy      VolumeAttachmentStateEnum = "busy"
)
