package shared

type DescribeDirectConnectGatewayAssociationsResult struct {
	DirectConnectGatewayAssociations []DirectConnectGatewayAssociation `json:"directConnectGatewayAssociations,omitempty"`
	NextToken                        *string                           `json:"nextToken,omitempty"`
}
