package shared

type BlockPublicAccessConfiguration struct {
	BlockPublicSecurityGroupRules          bool        `json:"BlockPublicSecurityGroupRules"`
	PermittedPublicSecurityGroupRuleRanges []PortRange `json:"PermittedPublicSecurityGroupRuleRanges"`
}
