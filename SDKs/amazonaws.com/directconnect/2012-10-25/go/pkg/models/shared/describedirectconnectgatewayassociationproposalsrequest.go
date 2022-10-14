package shared

type DescribeDirectConnectGatewayAssociationProposalsRequest struct {
	AssociatedGatewayID    *string `json:"associatedGatewayId,omitempty"`
	DirectConnectGatewayID *string `json:"directConnectGatewayId,omitempty"`
	MaxResults             *int64  `json:"maxResults,omitempty"`
	NextToken              *string `json:"nextToken,omitempty"`
	ProposalID             *string `json:"proposalId,omitempty"`
}
