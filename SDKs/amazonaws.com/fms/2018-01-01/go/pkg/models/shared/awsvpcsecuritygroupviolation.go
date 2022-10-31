package shared



type AwsVpcSecurityGroupViolation struct {
    PartialMatches []PartialMatch `json:"PartialMatches,omitempty"`
    PossibleSecurityGroupRemediationActions []SecurityGroupRemediationAction `json:"PossibleSecurityGroupRemediationActions,omitempty"`
    ViolationTarget *string `json:"ViolationTarget,omitempty"`
    ViolationTargetDescription *string `json:"ViolationTargetDescription,omitempty"`
    
}

