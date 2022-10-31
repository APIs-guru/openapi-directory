package shared



type NewPrivateVirtualInterfaceAllocation struct {
    AddressFamily *AddressFamilyEnum `json:"addressFamily,omitempty"`
    AmazonAddress *string `json:"amazonAddress,omitempty"`
    Asn int64 `json:"asn"`
    AuthKey *string `json:"authKey,omitempty"`
    CustomerAddress *string `json:"customerAddress,omitempty"`
    Mtu *int64 `json:"mtu,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    VirtualInterfaceName string `json:"virtualInterfaceName"`
    Vlan int64 `json:"vlan"`
    
}

