package shared

// CreateMatchmakingRuleSetInput
// Represents the input for a request operation.
type CreateMatchmakingRuleSetInput struct {
	Name        string `json:"Name"`
	RuleSetBody string `json:"RuleSetBody"`
	Tags        []Tag  `json:"Tags,omitempty"`
}
