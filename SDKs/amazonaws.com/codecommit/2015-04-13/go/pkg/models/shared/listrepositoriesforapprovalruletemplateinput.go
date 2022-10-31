package shared

type ListRepositoriesForApprovalRuleTemplateInput struct {
	ApprovalRuleTemplateName string  `json:"approvalRuleTemplateName"`
	MaxResults               *int64  `json:"maxResults,omitempty"`
	NextToken                *string `json:"nextToken,omitempty"`
}
