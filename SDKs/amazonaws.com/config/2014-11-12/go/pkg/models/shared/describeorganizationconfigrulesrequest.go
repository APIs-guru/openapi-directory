package shared

type DescribeOrganizationConfigRulesRequest struct {
	Limit                       *int64   `json:"Limit"`
	NextToken                   *string  `json:"NextToken"`
	OrganizationConfigRuleNames []string `json:"OrganizationConfigRuleNames"`
}
