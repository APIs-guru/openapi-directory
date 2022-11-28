package shared

// InlineArchiveRule
// An criterion statement in an archive rule. Each archive rule may have multiple criteria.
type InlineArchiveRule struct {
	Filter   map[string]Criterion `json:"filter"`
	RuleName string               `json:"ruleName"`
}
