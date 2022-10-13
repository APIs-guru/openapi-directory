package shared

type ListApprovalRuleTemplatesOutput struct {
	ApprovalRuleTemplateNames []string `json:"approvalRuleTemplateNames"`
	NextToken                 *string  `json:"nextToken"`
}
