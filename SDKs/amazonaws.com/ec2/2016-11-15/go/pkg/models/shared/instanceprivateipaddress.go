package shared

// InstancePrivateIPAddress
// Describes a private IPv4 address.
type InstancePrivateIPAddress struct {
	Association      *InstanceNetworkInterfaceAssociation
	Primary          *bool
	PrivateDNSName   *string
	PrivateIPAddress *string
}
