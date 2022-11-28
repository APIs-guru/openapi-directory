package shared

// PrivateIPAddressSpecification
// Describes a secondary private IPv4 address for a network interface.
type PrivateIPAddressSpecification struct {
	Primary          *bool
	PrivateIPAddress *string
}
