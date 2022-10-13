package shared

type ListRuleNamesByTargetResponse struct {
	NextToken *string  `json:"NextToken"`
	RuleNames []string `json:"RuleNames"`
}
