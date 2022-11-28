package shared

// ClientVpnRoute
// Information about a Client VPN endpoint route.
type ClientVpnRoute struct {
	ClientVpnEndpointID *string
	Description         *string
	DestinationCidr     *string
	Origin              *string
	Status              *ClientVpnRouteStatus
	TargetSubnet        *string
	Type                *string
}
