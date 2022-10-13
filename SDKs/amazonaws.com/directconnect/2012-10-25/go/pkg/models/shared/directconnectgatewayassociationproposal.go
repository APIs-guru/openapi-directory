package shared

type DirectConnectGatewayAssociationProposal struct {
	AssociatedGateway                              *AssociatedGateway                                `json:"associatedGateway"`
	DirectConnectGatewayID                         *string                                           `json:"directConnectGatewayId"`
	DirectConnectGatewayOwnerAccount               *string                                           `json:"directConnectGatewayOwnerAccount"`
	ExistingAllowedPrefixesToDirectConnectGateway  []RouteFilterPrefix                               `json:"existingAllowedPrefixesToDirectConnectGateway"`
	ProposalID                                     *string                                           `json:"proposalId"`
	ProposalState                                  *DirectConnectGatewayAssociationProposalStateEnum `json:"proposalState"`
	RequestedAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix                               `json:"requestedAllowedPrefixesToDirectConnectGateway"`
}
