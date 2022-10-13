package shared

type Evaluation struct {
	ApprovalRulesNotSatisfied []string `json:"approvalRulesNotSatisfied"`
	ApprovalRulesSatisfied    []string `json:"approvalRulesSatisfied"`
	Approved                  *bool    `json:"approved"`
	Overridden                *bool    `json:"overridden"`
}
