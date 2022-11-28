package shared

// VpnConnectionOptions
// Describes VPN connection options.
type VpnConnectionOptions struct {
	EnableAcceleration    *bool
	LocalIpv4NetworkCidr  *string
	LocalIpv6NetworkCidr  *string
	RemoteIpv4NetworkCidr *string
	RemoteIpv6NetworkCidr *string
	StaticRoutesOnly      *bool
	TunnelInsideIPVersion *TunnelInsideIPVersionEnum
	TunnelOptions         []TunnelOption
}
