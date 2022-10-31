package shared



type CreateDirectConnectGatewayAssociationRequest struct {
    AddAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix `json:"addAllowedPrefixesToDirectConnectGateway,omitempty"`
    DirectConnectGatewayID string `json:"directConnectGatewayId"`
    GatewayID *string `json:"gatewayId,omitempty"`
    VirtualGatewayID *string `json:"virtualGatewayId,omitempty"`
    
}

