package shared

type DirectConnectGateway struct {
	AmazonSideAsn             *int64                         `json:"amazonSideAsn"`
	DirectConnectGatewayID    *string                        `json:"directConnectGatewayId"`
	DirectConnectGatewayName  *string                        `json:"directConnectGatewayName"`
	DirectConnectGatewayState *DirectConnectGatewayStateEnum `json:"directConnectGatewayState"`
	OwnerAccount              *string                        `json:"ownerAccount"`
	StateChangeError          *string                        `json:"stateChangeError"`
}
