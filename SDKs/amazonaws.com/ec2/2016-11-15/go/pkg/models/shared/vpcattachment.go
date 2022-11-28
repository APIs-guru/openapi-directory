package shared

// VpcAttachment
// Describes an attachment between a virtual private gateway and a VPC.
type VpcAttachment struct {
	State *AttachmentStatusEnum
	VpcID *string
}
