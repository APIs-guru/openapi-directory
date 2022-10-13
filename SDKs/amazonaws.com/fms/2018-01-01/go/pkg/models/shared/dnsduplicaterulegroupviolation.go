package shared

type DNSDuplicateRuleGroupViolation struct {
	ViolationTarget            *string `json:"ViolationTarget"`
	ViolationTargetDescription *string `json:"ViolationTargetDescription"`
}
