package shared

type CreateClientVpnEndpointResult struct {
	ClientVpnEndpointID *string
	DNSName             *string
	Status              *ClientVpnEndpointStatus
}
