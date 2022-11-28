package shared

type DescribeSubnetsResult struct {
	NextToken *string
	Subnets   []Subnet
}
