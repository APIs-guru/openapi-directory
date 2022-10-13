package shared

type DNSRuleGroupPriorityConflictViolation struct {
	ConflictingPolicyID        *string `json:"ConflictingPolicyId"`
	ConflictingPriority        *int64  `json:"ConflictingPriority"`
	UnavailablePriorities      []int64 `json:"UnavailablePriorities"`
	ViolationTarget            *string `json:"ViolationTarget"`
	ViolationTargetDescription *string `json:"ViolationTargetDescription"`
}
