package shared

type AuthorizeSecurityGroupEgressResult struct {
	Return             *bool
	SecurityGroupRules []SecurityGroupRule
}
