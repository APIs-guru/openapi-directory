package shared

type DeleteBranchInput struct {
	BranchName     string `json:"branchName"`
	RepositoryName string `json:"repositoryName"`
}
