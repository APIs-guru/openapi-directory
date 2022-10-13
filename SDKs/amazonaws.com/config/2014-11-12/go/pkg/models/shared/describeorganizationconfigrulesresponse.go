package shared

type DescribeOrganizationConfigRulesResponse struct {
	NextToken               *string                  `json:"NextToken"`
	OrganizationConfigRules []OrganizationConfigRule `json:"OrganizationConfigRules"`
}
