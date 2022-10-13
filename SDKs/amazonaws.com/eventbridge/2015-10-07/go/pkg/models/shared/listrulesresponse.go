package shared

type ListRulesResponse struct {
	NextToken *string `json:"NextToken"`
	Rules     []Rule  `json:"Rules"`
}
