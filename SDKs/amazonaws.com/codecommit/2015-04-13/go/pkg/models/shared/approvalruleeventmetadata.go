package shared

// ApprovalRuleEventMetadata
// Returns information about an event for an approval rule.
type ApprovalRuleEventMetadata struct {
	ApprovalRuleContent *string `json:"approvalRuleContent,omitempty"`
	ApprovalRuleID      *string `json:"approvalRuleId,omitempty"`
	ApprovalRuleName    *string `json:"approvalRuleName,omitempty"`
}
