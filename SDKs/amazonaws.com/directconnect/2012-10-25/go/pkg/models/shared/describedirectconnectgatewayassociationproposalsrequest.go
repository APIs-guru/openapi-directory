package shared

type DescribeDirectConnectGatewayAssociationProposalsRequest struct {
	AssociatedGatewayID    *string `json:"associatedGatewayId"`
	DirectConnectGatewayID *string `json:"directConnectGatewayId"`
	MaxResults             *int64  `json:"maxResults"`
	NextToken              *string `json:"nextToken"`
	ProposalID             *string `json:"proposalId"`
}
