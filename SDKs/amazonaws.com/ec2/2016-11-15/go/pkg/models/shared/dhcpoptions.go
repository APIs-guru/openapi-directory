package shared

// DhcpOptions
// Describes a set of DHCP options.
type DhcpOptions struct {
	DhcpConfigurations []DhcpConfiguration
	DhcpOptionsID      *string
	OwnerID            *string
	Tags               []Tag
}
