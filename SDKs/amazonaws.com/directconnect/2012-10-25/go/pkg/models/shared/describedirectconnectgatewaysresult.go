package shared

type DescribeDirectConnectGatewaysResult struct {
	DirectConnectGateways []DirectConnectGateway `json:"directConnectGateways"`
	NextToken             *string                `json:"nextToken"`
}
