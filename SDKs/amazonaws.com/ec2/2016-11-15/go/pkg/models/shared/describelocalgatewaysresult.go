package shared

type DescribeLocalGatewaysResult struct {
	LocalGateways []LocalGateway
	NextToken     *string
}
