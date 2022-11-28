package shared

// InstanceNetworkInterfaceSpecification
// Describes a network interface.
type InstanceNetworkInterfaceSpecification struct {
	AssociateCarrierIPAddress      *bool
	AssociatePublicIPAddress       *bool
	DeleteOnTermination            *bool
	Description                    *string
	DeviceIndex                    *int64
	Groups                         []string
	InterfaceType                  *string
	Ipv4PrefixCount                *int64
	Ipv4Prefixes                   []Ipv4PrefixSpecificationRequest
	Ipv6AddressCount               *int64
	Ipv6Addresses                  []InstanceIpv6Address
	Ipv6PrefixCount                *int64
	Ipv6Prefixes                   []Ipv6PrefixSpecificationRequest
	NetworkCardIndex               *int64
	NetworkInterfaceID             *string
	PrivateIPAddress               *string
	PrivateIPAddresses             []PrivateIPAddressSpecification
	SecondaryPrivateIPAddressCount *int64
	SubnetID                       *string
}
