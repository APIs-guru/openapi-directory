package shared

type VirtualInterface struct {
	AddressFamily          *AddressFamilyEnum         `json:"addressFamily"`
	AmazonAddress          *string                    `json:"amazonAddress"`
	AmazonSideAsn          *int64                     `json:"amazonSideAsn"`
	Asn                    *int64                     `json:"asn"`
	AuthKey                *string                    `json:"authKey"`
	AwsDeviceV2            *string                    `json:"awsDeviceV2"`
	AwsLogicalDeviceID     *string                    `json:"awsLogicalDeviceId"`
	BgpPeers               []BgpPeer                  `json:"bgpPeers"`
	ConnectionID           *string                    `json:"connectionId"`
	CustomerAddress        *string                    `json:"customerAddress"`
	CustomerRouterConfig   *string                    `json:"customerRouterConfig"`
	DirectConnectGatewayID *string                    `json:"directConnectGatewayId"`
	JumboFrameCapable      *bool                      `json:"jumboFrameCapable"`
	Location               *string                    `json:"location"`
	Mtu                    *int64                     `json:"mtu"`
	OwnerAccount           *string                    `json:"ownerAccount"`
	Region                 *string                    `json:"region"`
	RouteFilterPrefixes    []RouteFilterPrefix        `json:"routeFilterPrefixes"`
	Tags                   []Tag                      `json:"tags"`
	VirtualGatewayID       *string                    `json:"virtualGatewayId"`
	VirtualInterfaceID     *string                    `json:"virtualInterfaceId"`
	VirtualInterfaceName   *string                    `json:"virtualInterfaceName"`
	VirtualInterfaceState  *VirtualInterfaceStateEnum `json:"virtualInterfaceState"`
	VirtualInterfaceType   *string                    `json:"virtualInterfaceType"`
	Vlan                   *int64                     `json:"vlan"`
}
