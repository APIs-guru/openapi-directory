package shared

type DescribeTransitGatewayConnectsResult struct {
	NextToken              *string
	TransitGatewayConnects []TransitGatewayConnect
}
