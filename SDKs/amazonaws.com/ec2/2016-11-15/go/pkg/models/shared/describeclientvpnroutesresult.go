package shared

type DescribeClientVpnRoutesResult struct {
	NextToken *string
	Routes    []ClientVpnRoute
}
