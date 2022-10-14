package shared

type DNSDuplicateRuleGroupViolation struct {
	ViolationTarget            *string `json:"ViolationTarget,omitempty"`
	ViolationTargetDescription *string `json:"ViolationTargetDescription,omitempty"`
}
