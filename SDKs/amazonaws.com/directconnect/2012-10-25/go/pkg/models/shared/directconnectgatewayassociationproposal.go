package shared



type DirectConnectGatewayAssociationProposal struct {
    AssociatedGateway *AssociatedGateway `json:"associatedGateway,omitempty"`
    DirectConnectGatewayID *string `json:"directConnectGatewayId,omitempty"`
    DirectConnectGatewayOwnerAccount *string `json:"directConnectGatewayOwnerAccount,omitempty"`
    ExistingAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix `json:"existingAllowedPrefixesToDirectConnectGateway,omitempty"`
    ProposalID *string `json:"proposalId,omitempty"`
    ProposalState *DirectConnectGatewayAssociationProposalStateEnum `json:"proposalState,omitempty"`
    RequestedAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix `json:"requestedAllowedPrefixesToDirectConnectGateway,omitempty"`
    
}

