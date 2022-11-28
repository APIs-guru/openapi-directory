package shared

type DescribeSecurityGroupsResult struct {
	NextToken      *string
	SecurityGroups []SecurityGroup
}
