package shared

type DescribeOrganizationConfigRulesResponse struct {
	NextToken               *string                  `json:"NextToken,omitempty"`
	OrganizationConfigRules []OrganizationConfigRule `json:"OrganizationConfigRules,omitempty"`
}
