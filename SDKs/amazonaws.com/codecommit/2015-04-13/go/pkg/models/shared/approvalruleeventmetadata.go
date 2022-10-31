package shared

type ApprovalRuleEventMetadata struct {
	ApprovalRuleContent *string `json:"approvalRuleContent,omitempty"`
	ApprovalRuleID      *string `json:"approvalRuleId,omitempty"`
	ApprovalRuleName    *string `json:"approvalRuleName,omitempty"`
}
