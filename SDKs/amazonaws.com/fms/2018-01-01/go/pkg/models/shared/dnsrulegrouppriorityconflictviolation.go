package shared

// DNSRuleGroupPriorityConflictViolation
// A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated.
type DNSRuleGroupPriorityConflictViolation struct {
	ConflictingPolicyID        *string `json:"ConflictingPolicyId,omitempty"`
	ConflictingPriority        *int64  `json:"ConflictingPriority,omitempty"`
	UnavailablePriorities      []int64 `json:"UnavailablePriorities,omitempty"`
	ViolationTarget            *string `json:"ViolationTarget,omitempty"`
	ViolationTargetDescription *string `json:"ViolationTargetDescription,omitempty"`
}
