package shared



type DNSRuleGroupLimitExceededViolation struct {
    NumberOfRuleGroupsAlreadyAssociated *int64 `json:"NumberOfRuleGroupsAlreadyAssociated,omitempty"`
    ViolationTarget *string `json:"ViolationTarget,omitempty"`
    ViolationTargetDescription *string `json:"ViolationTargetDescription,omitempty"`
    
}

