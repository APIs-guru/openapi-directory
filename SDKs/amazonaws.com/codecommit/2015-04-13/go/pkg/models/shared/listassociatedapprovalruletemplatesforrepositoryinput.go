package shared

type ListAssociatedApprovalRuleTemplatesForRepositoryInput struct {
	MaxResults     *int64  `json:"maxResults,omitempty"`
	NextToken      *string `json:"nextToken,omitempty"`
	RepositoryName string  `json:"repositoryName"`
}
