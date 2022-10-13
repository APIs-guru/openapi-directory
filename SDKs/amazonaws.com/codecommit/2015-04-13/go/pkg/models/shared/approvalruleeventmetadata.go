package shared

type ApprovalRuleEventMetadata struct {
	ApprovalRuleContent *string `json:"approvalRuleContent"`
	ApprovalRuleID      *string `json:"approvalRuleId"`
	ApprovalRuleName    *string `json:"approvalRuleName"`
}
