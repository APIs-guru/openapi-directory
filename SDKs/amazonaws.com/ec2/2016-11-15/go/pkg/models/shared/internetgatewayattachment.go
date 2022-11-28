package shared

// InternetGatewayAttachment
// Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
type InternetGatewayAttachment struct {
	State *AttachmentStatusEnum
	VpcID *string
}
