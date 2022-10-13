package shared

type ListRepositoriesForApprovalRuleTemplateOutput struct {
	NextToken       *string  `json:"nextToken"`
	RepositoryNames []string `json:"repositoryNames"`
}
