package shared

// NatGatewayAddress
// Describes the IP addresses and network interface associated with a NAT gateway.
type NatGatewayAddress struct {
	AllocationID       *string
	NetworkInterfaceID *string
	PrivateIP          *string
	PublicIP           *string
}
