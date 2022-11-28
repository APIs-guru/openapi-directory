package shared

type DescribeClientVpnEndpointsResult struct {
	ClientVpnEndpoints []ClientVpnEndpoint
	NextToken          *string
}
