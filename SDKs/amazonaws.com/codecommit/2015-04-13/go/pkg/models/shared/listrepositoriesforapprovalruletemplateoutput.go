package shared

type ListRepositoriesForApprovalRuleTemplateOutput struct {
	NextToken       *string  `json:"nextToken,omitempty"`
	RepositoryNames []string `json:"repositoryNames,omitempty"`
}
