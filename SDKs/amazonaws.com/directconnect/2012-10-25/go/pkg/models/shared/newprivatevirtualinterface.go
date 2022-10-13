package shared

type NewPrivateVirtualInterface struct {
	AddressFamily          *AddressFamilyEnum `json:"addressFamily"`
	AmazonAddress          *string            `json:"amazonAddress"`
	Asn                    int64              `json:"asn"`
	AuthKey                *string            `json:"authKey"`
	CustomerAddress        *string            `json:"customerAddress"`
	DirectConnectGatewayID *string            `json:"directConnectGatewayId"`
	Mtu                    *int64             `json:"mtu"`
	Tags                   []Tag              `json:"tags"`
	VirtualGatewayID       *string            `json:"virtualGatewayId"`
	VirtualInterfaceName   string             `json:"virtualInterfaceName"`
	Vlan                   int64              `json:"vlan"`
}
