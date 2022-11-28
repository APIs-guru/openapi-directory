package shared

type DescribeNetworkAclsResult struct {
	NetworkAcls []NetworkACL
	NextToken   *string
}
