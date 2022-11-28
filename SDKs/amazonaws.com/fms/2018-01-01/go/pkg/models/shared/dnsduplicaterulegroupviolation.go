package shared

// DNSDuplicateRuleGroupViolation
// A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again.
type DNSDuplicateRuleGroupViolation struct {
	ViolationTarget            *string `json:"ViolationTarget,omitempty"`
	ViolationTargetDescription *string `json:"ViolationTargetDescription,omitempty"`
}
