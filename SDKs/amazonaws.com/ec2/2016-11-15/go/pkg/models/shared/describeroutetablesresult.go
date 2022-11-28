package shared

// DescribeRouteTablesResult
// Contains the output of DescribeRouteTables.
type DescribeRouteTablesResult struct {
	NextToken   *string
	RouteTables []RouteTable
}
