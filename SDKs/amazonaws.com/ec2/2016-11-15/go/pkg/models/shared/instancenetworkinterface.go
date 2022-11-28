package shared

// InstanceNetworkInterface
// Describes a network interface.
type InstanceNetworkInterface struct {
	Association        *InstanceNetworkInterfaceAssociation
	Attachment         *InstanceNetworkInterfaceAttachment
	Description        *string
	Groups             []GroupIdentifier
	InterfaceType      *string
	Ipv4Prefixes       []InstanceIpv4Prefix
	Ipv6Addresses      []InstanceIpv6Address
	Ipv6Prefixes       []InstanceIpv6Prefix
	MacAddress         *string
	NetworkInterfaceID *string
	OwnerID            *string
	PrivateDNSName     *string
	PrivateIPAddress   *string
	PrivateIPAddresses []InstancePrivateIPAddress
	SourceDestCheck    *bool
	Status             *NetworkInterfaceStatusEnum
	SubnetID           *string
	VpcID              *string
}
