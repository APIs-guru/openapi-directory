package shared

type ConfirmPrivateVirtualInterfaceRequest struct {
	DirectConnectGatewayID *string `json:"directConnectGatewayId"`
	VirtualGatewayID       *string `json:"virtualGatewayId"`
	VirtualInterfaceID     string  `json:"virtualInterfaceId"`
}
