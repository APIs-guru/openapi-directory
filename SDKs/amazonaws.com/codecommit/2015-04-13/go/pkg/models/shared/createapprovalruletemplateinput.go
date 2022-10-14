package shared

type CreateApprovalRuleTemplateInput struct {
	ApprovalRuleTemplateContent     string  `json:"approvalRuleTemplateContent"`
	ApprovalRuleTemplateDescription *string `json:"approvalRuleTemplateDescription,omitempty"`
	ApprovalRuleTemplateName        string  `json:"approvalRuleTemplateName"`
}
