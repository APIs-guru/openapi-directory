package shared

type Evaluation struct {
	ApprovalRulesNotSatisfied []string `json:"approvalRulesNotSatisfied,omitempty"`
	ApprovalRulesSatisfied    []string `json:"approvalRulesSatisfied,omitempty"`
	Approved                  *bool    `json:"approved,omitempty"`
	Overridden                *bool    `json:"overridden,omitempty"`
}
