package shared

// VirtualGateway
// Information about a virtual private gateway for a private virtual interface.
type VirtualGateway struct {
	VirtualGatewayID    *string `json:"virtualGatewayId,omitempty"`
	VirtualGatewayState *string `json:"virtualGatewayState,omitempty"`
}
