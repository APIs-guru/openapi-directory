package shared

type DescribeTransitGatewaysResult struct {
	NextToken       *string
	TransitGateways []TransitGateway
}
