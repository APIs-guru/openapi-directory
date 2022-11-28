package shared

// TransitGatewayMulticastGroup
// Describes the transit gateway multicast group resources.
type TransitGatewayMulticastGroup struct {
	GroupIPAddress             *string
	GroupMember                *bool
	GroupSource                *bool
	MemberType                 *MembershipTypeEnum
	NetworkInterfaceID         *string
	ResourceID                 *string
	ResourceOwnerID            *string
	ResourceType               *TransitGatewayAttachmentResourceTypeEnum
	SourceType                 *MembershipTypeEnum
	SubnetID                   *string
	TransitGatewayAttachmentID *string
}
