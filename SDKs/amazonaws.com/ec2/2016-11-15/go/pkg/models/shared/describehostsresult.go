package shared

type DescribeHostsResult struct {
	Hosts     []Host
	NextToken *string
}
