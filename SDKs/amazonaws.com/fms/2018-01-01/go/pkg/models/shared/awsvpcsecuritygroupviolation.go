package shared

type AwsVpcSecurityGroupViolation struct {
	PartialMatches                          []PartialMatch                   `json:"PartialMatches"`
	PossibleSecurityGroupRemediationActions []SecurityGroupRemediationAction `json:"PossibleSecurityGroupRemediationActions"`
	ViolationTarget                         *string                          `json:"ViolationTarget"`
	ViolationTargetDescription              *string                          `json:"ViolationTargetDescription"`
}
