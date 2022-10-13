package shared

type DeleteDirectConnectGatewayAssociationRequest struct {
	AssociationID          *string `json:"associationId"`
	DirectConnectGatewayID *string `json:"directConnectGatewayId"`
	VirtualGatewayID       *string `json:"virtualGatewayId"`
}
