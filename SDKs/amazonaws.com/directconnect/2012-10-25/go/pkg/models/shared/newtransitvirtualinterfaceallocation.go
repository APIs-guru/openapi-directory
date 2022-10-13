package shared

type NewTransitVirtualInterfaceAllocation struct {
	AddressFamily        *AddressFamilyEnum `json:"addressFamily"`
	AmazonAddress        *string            `json:"amazonAddress"`
	Asn                  *int64             `json:"asn"`
	AuthKey              *string            `json:"authKey"`
	CustomerAddress      *string            `json:"customerAddress"`
	Mtu                  *int64             `json:"mtu"`
	Tags                 []Tag              `json:"tags"`
	VirtualInterfaceName *string            `json:"virtualInterfaceName"`
	Vlan                 *int64             `json:"vlan"`
}
