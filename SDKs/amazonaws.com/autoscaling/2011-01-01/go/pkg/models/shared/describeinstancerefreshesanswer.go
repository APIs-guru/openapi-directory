package shared

type DescribeInstanceRefreshesAnswer struct {
	InstanceRefreshes []InstanceRefresh
	NextToken         *string
}
