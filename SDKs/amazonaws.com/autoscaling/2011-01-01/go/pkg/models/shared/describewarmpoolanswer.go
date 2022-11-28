package shared

type DescribeWarmPoolAnswer struct {
	Instances             []Instance
	NextToken             *string
	WarmPoolConfiguration *WarmPoolConfiguration
}
