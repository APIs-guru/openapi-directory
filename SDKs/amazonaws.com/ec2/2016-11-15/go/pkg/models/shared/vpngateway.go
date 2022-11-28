package shared

// VpnGateway
// Describes a virtual private gateway.
type VpnGateway struct {
	AmazonSideAsn    *int64
	AvailabilityZone *string
	State            *VpnStateEnum
	Tags             []Tag
	Type             *GatewayTypeEnum
	VpcAttachments   []VpcAttachment
	VpnGatewayID     *string
}
