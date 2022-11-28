package shared

type DescribeClientVpnConnectionsResult struct {
	Connections []ClientVpnConnection
	NextToken   *string
}
