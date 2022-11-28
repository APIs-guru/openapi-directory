package shared

// AnalysisACLRule
// Describes a network access control (ACL) rule.
type AnalysisACLRule struct {
	Cidr       *string
	Egress     *bool
	PortRange  *PortRange
	Protocol   *string
	RuleAction *string
	RuleNumber *int64
}
