package shared

// NewTransitVirtualInterfaceAllocation
// Information about a transit virtual interface to be provisioned on a connection.
type NewTransitVirtualInterfaceAllocation struct {
	AddressFamily        *AddressFamilyEnum `json:"addressFamily,omitempty"`
	AmazonAddress        *string            `json:"amazonAddress,omitempty"`
	Asn                  *int64             `json:"asn,omitempty"`
	AuthKey              *string            `json:"authKey,omitempty"`
	CustomerAddress      *string            `json:"customerAddress,omitempty"`
	Mtu                  *int64             `json:"mtu,omitempty"`
	Tags                 []Tag              `json:"tags,omitempty"`
	VirtualInterfaceName *string            `json:"virtualInterfaceName,omitempty"`
	Vlan                 *int64             `json:"vlan,omitempty"`
}
