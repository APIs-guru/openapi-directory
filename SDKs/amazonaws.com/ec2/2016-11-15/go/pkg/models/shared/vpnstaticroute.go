package shared

// VpnStaticRoute
// Describes a static route for a VPN connection.
type VpnStaticRoute struct {
	DestinationCidrBlock *string
	Source               *VpnStaticRouteSourceEnum
	State                *VpnStateEnum
}
