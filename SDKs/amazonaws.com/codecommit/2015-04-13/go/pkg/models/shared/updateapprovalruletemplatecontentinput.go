package shared

type UpdateApprovalRuleTemplateContentInput struct {
	ApprovalRuleTemplateName  string  `json:"approvalRuleTemplateName"`
	ExistingRuleContentSha256 *string `json:"existingRuleContentSha256,omitempty"`
	NewRuleContent            string  `json:"newRuleContent"`
}
