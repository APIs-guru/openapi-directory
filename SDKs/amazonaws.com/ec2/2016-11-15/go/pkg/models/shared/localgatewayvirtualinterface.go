package shared

// LocalGatewayVirtualInterface
// Describes a local gateway virtual interface.
type LocalGatewayVirtualInterface struct {
	LocalAddress                   *string
	LocalBgpAsn                    *int64
	LocalGatewayID                 *string
	LocalGatewayVirtualInterfaceID *string
	OwnerID                        *string
	PeerAddress                    *string
	PeerBgpAsn                     *int64
	Tags                           []Tag
	Vlan                           *int64
}
