package shared

type AttachmentStatusEnum string

const (
	AttachmentStatusEnumAttaching AttachmentStatusEnum = "attaching"
	AttachmentStatusEnumAttached  AttachmentStatusEnum = "attached"
	AttachmentStatusEnumDetaching AttachmentStatusEnum = "detaching"
	AttachmentStatusEnumDetached  AttachmentStatusEnum = "detached"
)
