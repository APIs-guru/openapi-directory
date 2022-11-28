package shared

// LocalGatewayVirtualInterfaceGroup
// Describes a local gateway virtual interface group.
type LocalGatewayVirtualInterfaceGroup struct {
	LocalGatewayID                      *string
	LocalGatewayVirtualInterfaceGroupID *string
	LocalGatewayVirtualInterfaceIds     []string
	OwnerID                             *string
	Tags                                []Tag
}
