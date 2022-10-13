package shared

type DescribeConfigRuleEvaluationStatusResponse struct {
	ConfigRulesEvaluationStatus []ConfigRuleEvaluationStatus `json:"ConfigRulesEvaluationStatus"`
	NextToken                   *string                      `json:"NextToken"`
}
