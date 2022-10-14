package shared

type DescribeDirectConnectGatewayAssociationProposalsResult struct {
	DirectConnectGatewayAssociationProposals []DirectConnectGatewayAssociationProposal `json:"directConnectGatewayAssociationProposals,omitempty"`
	NextToken                                *string                                   `json:"nextToken,omitempty"`
}
