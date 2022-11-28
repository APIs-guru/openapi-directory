package shared

// OriginApprovalRuleTemplate
// Returns information about the template that created the approval rule for a pull request.
type OriginApprovalRuleTemplate struct {
	ApprovalRuleTemplateID   *string `json:"approvalRuleTemplateId,omitempty"`
	ApprovalRuleTemplateName *string `json:"approvalRuleTemplateName,omitempty"`
}
