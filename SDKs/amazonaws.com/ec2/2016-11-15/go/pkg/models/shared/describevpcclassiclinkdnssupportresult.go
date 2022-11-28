package shared

type DescribeVpcClassicLinkDNSSupportResult struct {
	NextToken *string
	Vpcs      []ClassicLinkDNSSupport
}
