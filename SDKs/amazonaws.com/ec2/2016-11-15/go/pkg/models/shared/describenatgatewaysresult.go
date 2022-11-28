package shared

type DescribeNatGatewaysResult struct {
	NatGateways []NatGateway
	NextToken   *string
}
