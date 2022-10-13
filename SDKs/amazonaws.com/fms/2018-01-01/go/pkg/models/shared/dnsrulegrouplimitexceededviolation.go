package shared

type DNSRuleGroupLimitExceededViolation struct {
	NumberOfRuleGroupsAlreadyAssociated *int64  `json:"NumberOfRuleGroupsAlreadyAssociated"`
	ViolationTarget                     *string `json:"ViolationTarget"`
	ViolationTargetDescription          *string `json:"ViolationTargetDescription"`
}
