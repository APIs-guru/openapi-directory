package shared

type DescribeStaleSecurityGroupsResult struct {
	NextToken             *string
	StaleSecurityGroupSet []StaleSecurityGroup
}
