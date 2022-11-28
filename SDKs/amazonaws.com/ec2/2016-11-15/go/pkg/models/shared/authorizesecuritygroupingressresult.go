package shared

type AuthorizeSecurityGroupIngressResult struct {
	Return             *bool
	SecurityGroupRules []SecurityGroupRule
}
