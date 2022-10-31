package shared

type DescribeConfigRuleEvaluationStatusRequest struct {
	ConfigRuleNames []string `json:"ConfigRuleNames,omitempty"`
	Limit           *int64   `json:"Limit,omitempty"`
	NextToken       *string  `json:"NextToken,omitempty"`
}
