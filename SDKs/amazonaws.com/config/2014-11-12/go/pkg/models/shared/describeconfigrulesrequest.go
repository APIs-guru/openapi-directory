package shared

type DescribeConfigRulesRequest struct {
	ConfigRuleNames []string `json:"ConfigRuleNames"`
	NextToken       *string  `json:"NextToken"`
}
