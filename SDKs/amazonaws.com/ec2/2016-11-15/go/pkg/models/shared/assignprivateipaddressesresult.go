package shared

type AssignPrivateIPAddressesResult struct {
	AssignedIpv4Prefixes       []Ipv4PrefixSpecification
	AssignedPrivateIPAddresses []AssignedPrivateIPAddress
	NetworkInterfaceID         *string
}
