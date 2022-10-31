package shared

type CreateBranchInput struct {
	BranchName     string `json:"branchName"`
	CommitID       string `json:"commitId"`
	RepositoryName string `json:"repositoryName"`
}
