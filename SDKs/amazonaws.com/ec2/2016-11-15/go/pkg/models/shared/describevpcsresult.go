package shared

type DescribeVpcsResult struct {
	NextToken *string
	Vpcs      []Vpc
}
