package shared

type ListAssociatedApprovalRuleTemplatesForRepositoryInput struct {
	MaxResults     *int64  `json:"maxResults"`
	NextToken      *string `json:"nextToken"`
	RepositoryName string  `json:"repositoryName"`
}
