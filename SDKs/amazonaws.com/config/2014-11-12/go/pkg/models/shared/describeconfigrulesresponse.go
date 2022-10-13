package shared

type DescribeConfigRulesResponse struct {
	ConfigRules []ConfigRule `json:"ConfigRules"`
	NextToken   *string      `json:"NextToken"`
}
