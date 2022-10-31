package shared



type DescribeConfigRuleEvaluationStatusResponse struct {
    ConfigRulesEvaluationStatus []ConfigRuleEvaluationStatus `json:"ConfigRulesEvaluationStatus,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

