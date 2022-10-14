package shared

type DirectConnectGateway struct {
	AmazonSideAsn             *int64                         `json:"amazonSideAsn,omitempty"`
	DirectConnectGatewayID    *string                        `json:"directConnectGatewayId,omitempty"`
	DirectConnectGatewayName  *string                        `json:"directConnectGatewayName,omitempty"`
	DirectConnectGatewayState *DirectConnectGatewayStateEnum `json:"directConnectGatewayState,omitempty"`
	OwnerAccount              *string                        `json:"ownerAccount,omitempty"`
	StateChangeError          *string                        `json:"stateChangeError,omitempty"`
}
