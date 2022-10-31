package shared



type DescribeConfigRulesResponse struct {
    ConfigRules []ConfigRule `json:"ConfigRules,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

