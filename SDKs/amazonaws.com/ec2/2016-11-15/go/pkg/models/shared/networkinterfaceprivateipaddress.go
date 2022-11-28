package shared

// NetworkInterfacePrivateIPAddress
// Describes the private IPv4 address of a network interface.
type NetworkInterfacePrivateIPAddress struct {
	Association      *NetworkInterfaceAssociation
	Primary          *bool
	PrivateDNSName   *string
	PrivateIPAddress *string
}
