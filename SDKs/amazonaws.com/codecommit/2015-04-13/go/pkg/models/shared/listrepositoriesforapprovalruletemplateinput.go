package shared

type ListRepositoriesForApprovalRuleTemplateInput struct {
	ApprovalRuleTemplateName string  `json:"approvalRuleTemplateName"`
	MaxResults               *int64  `json:"maxResults"`
	NextToken                *string `json:"nextToken"`
}
