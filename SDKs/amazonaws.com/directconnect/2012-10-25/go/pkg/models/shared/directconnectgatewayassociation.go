package shared

type DirectConnectGatewayAssociation struct {
	AllowedPrefixesToDirectConnectGateway []RouteFilterPrefix                       `json:"allowedPrefixesToDirectConnectGateway"`
	AssociatedGateway                     *AssociatedGateway                        `json:"associatedGateway"`
	AssociationID                         *string                                   `json:"associationId"`
	AssociationState                      *DirectConnectGatewayAssociationStateEnum `json:"associationState"`
	DirectConnectGatewayID                *string                                   `json:"directConnectGatewayId"`
	DirectConnectGatewayOwnerAccount      *string                                   `json:"directConnectGatewayOwnerAccount"`
	StateChangeError                      *string                                   `json:"stateChangeError"`
	VirtualGatewayID                      *string                                   `json:"virtualGatewayId"`
	VirtualGatewayOwnerAccount            *string                                   `json:"virtualGatewayOwnerAccount"`
	VirtualGatewayRegion                  *string                                   `json:"virtualGatewayRegion"`
}
