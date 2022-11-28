package shared

// DescribeConfigRuleEvaluationStatusRequest
// <p/>
type DescribeConfigRuleEvaluationStatusRequest struct {
	ConfigRuleNames []string `json:"ConfigRuleNames,omitempty"`
	Limit           *int64   `json:"Limit,omitempty"`
	NextToken       *string  `json:"NextToken,omitempty"`
}
