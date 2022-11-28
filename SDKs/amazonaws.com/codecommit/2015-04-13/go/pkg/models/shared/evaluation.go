package shared

// Evaluation
// Returns information about the approval rules applied to a pull request and whether conditions have been met.
type Evaluation struct {
	ApprovalRulesNotSatisfied []string `json:"approvalRulesNotSatisfied,omitempty"`
	ApprovalRulesSatisfied    []string `json:"approvalRulesSatisfied,omitempty"`
	Approved                  *bool    `json:"approved,omitempty"`
	Overridden                *bool    `json:"overridden,omitempty"`
}
