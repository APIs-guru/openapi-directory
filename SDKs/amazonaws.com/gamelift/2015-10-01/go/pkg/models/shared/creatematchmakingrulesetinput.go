package shared

type CreateMatchmakingRuleSetInput struct {
	Name        string `json:"Name"`
	RuleSetBody string `json:"RuleSetBody"`
	Tags        []Tag  `json:"Tags"`
}
