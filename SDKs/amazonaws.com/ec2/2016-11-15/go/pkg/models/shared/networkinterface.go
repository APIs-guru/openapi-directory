package shared

// NetworkInterface
// Describes a network interface.
type NetworkInterface struct {
	Association        *NetworkInterfaceAssociation
	Attachment         *NetworkInterfaceAttachment
	AvailabilityZone   *string
	Description        *string
	Groups             []GroupIdentifier
	InterfaceType      *NetworkInterfaceTypeEnum
	Ipv4Prefixes       []Ipv4PrefixSpecification
	Ipv6Addresses      []NetworkInterfaceIpv6Address
	Ipv6Prefixes       []Ipv6PrefixSpecification
	MacAddress         *string
	NetworkInterfaceID *string
	OutpostArn         *string
	OwnerID            *string
	PrivateDNSName     *string
	PrivateIPAddress   *string
	PrivateIPAddresses []NetworkInterfacePrivateIPAddress
	RequesterID        *string
	RequesterManaged   *bool
	SourceDestCheck    *bool
	Status             *NetworkInterfaceStatusEnum
	SubnetID           *string
	TagSet             []Tag
	VpcID              *string
}
