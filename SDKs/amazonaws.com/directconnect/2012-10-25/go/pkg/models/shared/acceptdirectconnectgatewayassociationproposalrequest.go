package shared

type AcceptDirectConnectGatewayAssociationProposalRequest struct {
	AssociatedGatewayOwnerAccount                 string              `json:"associatedGatewayOwnerAccount"`
	DirectConnectGatewayID                        string              `json:"directConnectGatewayId"`
	OverrideAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix `json:"overrideAllowedPrefixesToDirectConnectGateway"`
	ProposalID                                    string              `json:"proposalId"`
}
