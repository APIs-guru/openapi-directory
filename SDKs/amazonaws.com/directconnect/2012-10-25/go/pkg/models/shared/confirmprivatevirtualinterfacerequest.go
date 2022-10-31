package shared

type ConfirmPrivateVirtualInterfaceRequest struct {
	DirectConnectGatewayID *string `json:"directConnectGatewayId,omitempty"`
	VirtualGatewayID       *string `json:"virtualGatewayId,omitempty"`
	VirtualInterfaceID     string  `json:"virtualInterfaceId"`
}
