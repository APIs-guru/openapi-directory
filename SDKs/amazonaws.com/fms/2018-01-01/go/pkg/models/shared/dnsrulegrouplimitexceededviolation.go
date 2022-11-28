package shared

// DNSRuleGroupLimitExceededViolation
// The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit.
type DNSRuleGroupLimitExceededViolation struct {
	NumberOfRuleGroupsAlreadyAssociated *int64  `json:"NumberOfRuleGroupsAlreadyAssociated,omitempty"`
	ViolationTarget                     *string `json:"ViolationTarget,omitempty"`
	ViolationTargetDescription          *string `json:"ViolationTargetDescription,omitempty"`
}
