package shared

type CreateDirectConnectGatewayAssociationRequest struct {
	AddAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix `json:"addAllowedPrefixesToDirectConnectGateway"`
	DirectConnectGatewayID                   string              `json:"directConnectGatewayId"`
	GatewayID                                *string             `json:"gatewayId"`
	VirtualGatewayID                         *string             `json:"virtualGatewayId"`
}
