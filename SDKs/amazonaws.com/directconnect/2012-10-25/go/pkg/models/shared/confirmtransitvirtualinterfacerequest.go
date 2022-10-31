package shared

type ConfirmTransitVirtualInterfaceRequest struct {
	DirectConnectGatewayID string `json:"directConnectGatewayId"`
	VirtualInterfaceID     string `json:"virtualInterfaceId"`
}
