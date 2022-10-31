package shared



type DeleteDirectConnectGatewayAssociationRequest struct {
    AssociationID *string `json:"associationId,omitempty"`
    DirectConnectGatewayID *string `json:"directConnectGatewayId,omitempty"`
    VirtualGatewayID *string `json:"virtualGatewayId,omitempty"`
    
}

