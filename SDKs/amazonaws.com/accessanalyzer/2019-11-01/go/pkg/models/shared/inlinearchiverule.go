package shared

type InlineArchiveRule struct {
	Filter   map[string]Criterion `json:"filter"`
	RuleName string               `json:"ruleName"`
}
