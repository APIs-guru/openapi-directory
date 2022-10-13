package shared

type ListTargetsByRuleResponse struct {
	NextToken *string  `json:"NextToken"`
	Targets   []Target `json:"Targets"`
}
