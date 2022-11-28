package shared

type UnassignIpv6AddressesResult struct {
	NetworkInterfaceID      *string
	UnassignedIpv6Addresses []string
	UnassignedIpv6Prefixes  []string
}
