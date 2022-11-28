package shared

// DescribeConfigRulesRequest
// <p/>
type DescribeConfigRulesRequest struct {
	ConfigRuleNames []string `json:"ConfigRuleNames,omitempty"`
	NextToken       *string  `json:"NextToken,omitempty"`
}
