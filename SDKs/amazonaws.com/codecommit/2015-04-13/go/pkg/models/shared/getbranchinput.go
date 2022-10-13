package shared

type GetBranchInput struct {
	BranchName     *string `json:"branchName"`
	RepositoryName *string `json:"repositoryName"`
}
