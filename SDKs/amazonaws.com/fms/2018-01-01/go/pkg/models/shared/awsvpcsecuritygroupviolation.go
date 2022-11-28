package shared

// AwsVpcSecurityGroupViolation
// Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.
type AwsVpcSecurityGroupViolation struct {
	PartialMatches                          []PartialMatch                   `json:"PartialMatches,omitempty"`
	PossibleSecurityGroupRemediationActions []SecurityGroupRemediationAction `json:"PossibleSecurityGroupRemediationActions,omitempty"`
	ViolationTarget                         *string                          `json:"ViolationTarget,omitempty"`
	ViolationTargetDescription              *string                          `json:"ViolationTargetDescription,omitempty"`
}
