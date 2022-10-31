package shared

type ListBranchesInput struct {
	NextToken      *string `json:"nextToken,omitempty"`
	RepositoryName string  `json:"repositoryName"`
}
