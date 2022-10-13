package shared

type ListBranchesInput struct {
	NextToken      *string `json:"nextToken"`
	RepositoryName string  `json:"repositoryName"`
}
