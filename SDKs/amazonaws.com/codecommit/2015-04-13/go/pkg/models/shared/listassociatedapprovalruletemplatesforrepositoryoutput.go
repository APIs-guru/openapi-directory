package shared

type ListAssociatedApprovalRuleTemplatesForRepositoryOutput struct {
	ApprovalRuleTemplateNames []string `json:"approvalRuleTemplateNames"`
	NextToken                 *string  `json:"nextToken"`
}
