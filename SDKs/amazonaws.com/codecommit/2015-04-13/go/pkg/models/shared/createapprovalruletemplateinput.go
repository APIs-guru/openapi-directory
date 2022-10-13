package shared

type CreateApprovalRuleTemplateInput struct {
	ApprovalRuleTemplateContent     string  `json:"approvalRuleTemplateContent"`
	ApprovalRuleTemplateDescription *string `json:"approvalRuleTemplateDescription"`
	ApprovalRuleTemplateName        string  `json:"approvalRuleTemplateName"`
}
