package shared

type DirectConnectGatewayAssociation struct {
	AllowedPrefixesToDirectConnectGateway []RouteFilterPrefix                       `json:"allowedPrefixesToDirectConnectGateway,omitempty"`
	AssociatedGateway                     *AssociatedGateway                        `json:"associatedGateway,omitempty"`
	AssociationID                         *string                                   `json:"associationId,omitempty"`
	AssociationState                      *DirectConnectGatewayAssociationStateEnum `json:"associationState,omitempty"`
	DirectConnectGatewayID                *string                                   `json:"directConnectGatewayId,omitempty"`
	DirectConnectGatewayOwnerAccount      *string                                   `json:"directConnectGatewayOwnerAccount,omitempty"`
	StateChangeError                      *string                                   `json:"stateChangeError,omitempty"`
	VirtualGatewayID                      *string                                   `json:"virtualGatewayId,omitempty"`
	VirtualGatewayOwnerAccount            *string                                   `json:"virtualGatewayOwnerAccount,omitempty"`
	VirtualGatewayRegion                  *string                                   `json:"virtualGatewayRegion,omitempty"`
}
