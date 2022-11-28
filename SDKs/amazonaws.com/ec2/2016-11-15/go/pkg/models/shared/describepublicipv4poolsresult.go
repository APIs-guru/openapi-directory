package shared

type DescribePublicIpv4PoolsResult struct {
	NextToken       *string
	PublicIpv4Pools []PublicIpv4Pool
}
