package shared

type DescribeSecurityGroupRulesResult struct {
	NextToken          *string
	SecurityGroupRules []SecurityGroupRule
}
