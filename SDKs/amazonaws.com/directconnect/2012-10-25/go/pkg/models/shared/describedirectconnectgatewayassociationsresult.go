package shared

type DescribeDirectConnectGatewayAssociationsResult struct {
	DirectConnectGatewayAssociations []DirectConnectGatewayAssociation `json:"directConnectGatewayAssociations"`
	NextToken                        *string                           `json:"nextToken"`
}
