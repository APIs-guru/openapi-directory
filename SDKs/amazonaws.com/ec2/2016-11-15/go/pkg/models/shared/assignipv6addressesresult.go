package shared

type AssignIpv6AddressesResult struct {
	AssignedIpv6Addresses []string
	AssignedIpv6Prefixes  []string
	NetworkInterfaceID    *string
}
