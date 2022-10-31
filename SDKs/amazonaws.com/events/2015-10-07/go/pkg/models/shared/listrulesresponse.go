package shared

type ListRulesResponse struct {
	NextToken *string `json:"NextToken,omitempty"`
	Rules     []Rule  `json:"Rules,omitempty"`
}
