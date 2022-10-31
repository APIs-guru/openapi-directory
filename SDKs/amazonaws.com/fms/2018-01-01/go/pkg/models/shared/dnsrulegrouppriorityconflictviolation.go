package shared

type DNSRuleGroupPriorityConflictViolation struct {
	ConflictingPolicyID        *string `json:"ConflictingPolicyId,omitempty"`
	ConflictingPriority        *int64  `json:"ConflictingPriority,omitempty"`
	UnavailablePriorities      []int64 `json:"UnavailablePriorities,omitempty"`
	ViolationTarget            *string `json:"ViolationTarget,omitempty"`
	ViolationTargetDescription *string `json:"ViolationTargetDescription,omitempty"`
}
