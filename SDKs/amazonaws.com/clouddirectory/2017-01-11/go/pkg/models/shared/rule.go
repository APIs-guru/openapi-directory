package shared

// Rule
// Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.
type Rule struct {
	Parameters map[string]string `json:"Parameters,omitempty"`
	Type       *RuleTypeEnum     `json:"Type,omitempty"`
}
