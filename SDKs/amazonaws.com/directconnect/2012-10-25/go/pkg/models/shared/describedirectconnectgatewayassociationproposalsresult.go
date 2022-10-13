package shared

type DescribeDirectConnectGatewayAssociationProposalsResult struct {
	DirectConnectGatewayAssociationProposals []DirectConnectGatewayAssociationProposal `json:"directConnectGatewayAssociationProposals"`
	NextToken                                *string                                   `json:"nextToken"`
}
