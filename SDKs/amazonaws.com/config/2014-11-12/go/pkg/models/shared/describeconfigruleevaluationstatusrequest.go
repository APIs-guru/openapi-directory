package shared

type DescribeConfigRuleEvaluationStatusRequest struct {
	ConfigRuleNames []string `json:"ConfigRuleNames"`
	Limit           *int64   `json:"Limit"`
	NextToken       *string  `json:"NextToken"`
}
