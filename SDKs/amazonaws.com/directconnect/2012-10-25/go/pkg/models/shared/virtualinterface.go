package shared

// VirtualInterface
// Information about a virtual interface.
type VirtualInterface struct {
	AddressFamily          *AddressFamilyEnum         `json:"addressFamily,omitempty"`
	AmazonAddress          *string                    `json:"amazonAddress,omitempty"`
	AmazonSideAsn          *int64                     `json:"amazonSideAsn,omitempty"`
	Asn                    *int64                     `json:"asn,omitempty"`
	AuthKey                *string                    `json:"authKey,omitempty"`
	AwsDeviceV2            *string                    `json:"awsDeviceV2,omitempty"`
	AwsLogicalDeviceID     *string                    `json:"awsLogicalDeviceId,omitempty"`
	BgpPeers               []BgpPeer                  `json:"bgpPeers,omitempty"`
	ConnectionID           *string                    `json:"connectionId,omitempty"`
	CustomerAddress        *string                    `json:"customerAddress,omitempty"`
	CustomerRouterConfig   *string                    `json:"customerRouterConfig,omitempty"`
	DirectConnectGatewayID *string                    `json:"directConnectGatewayId,omitempty"`
	JumboFrameCapable      *bool                      `json:"jumboFrameCapable,omitempty"`
	Location               *string                    `json:"location,omitempty"`
	Mtu                    *int64                     `json:"mtu,omitempty"`
	OwnerAccount           *string                    `json:"ownerAccount,omitempty"`
	Region                 *string                    `json:"region,omitempty"`
	RouteFilterPrefixes    []RouteFilterPrefix        `json:"routeFilterPrefixes,omitempty"`
	Tags                   []Tag                      `json:"tags,omitempty"`
	VirtualGatewayID       *string                    `json:"virtualGatewayId,omitempty"`
	VirtualInterfaceID     *string                    `json:"virtualInterfaceId,omitempty"`
	VirtualInterfaceName   *string                    `json:"virtualInterfaceName,omitempty"`
	VirtualInterfaceState  *VirtualInterfaceStateEnum `json:"virtualInterfaceState,omitempty"`
	VirtualInterfaceType   *string                    `json:"virtualInterfaceType,omitempty"`
	Vlan                   *int64                     `json:"vlan,omitempty"`
}
