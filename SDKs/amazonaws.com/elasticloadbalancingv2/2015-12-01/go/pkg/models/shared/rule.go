package shared

// Rule
// Information about a rule.
type Rule struct {
	Actions    []Action
	Conditions []RuleCondition
	IsDefault  *bool
	Priority   *string
	RuleArn    *string
}
