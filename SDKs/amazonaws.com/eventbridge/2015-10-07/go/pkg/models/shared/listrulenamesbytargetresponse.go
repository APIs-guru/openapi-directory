package shared

type ListRuleNamesByTargetResponse struct {
	NextToken *string  `json:"NextToken,omitempty"`
	RuleNames []string `json:"RuleNames,omitempty"`
}
