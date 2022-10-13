package shared

type BranchInfo struct {
	BranchName *string `json:"branchName"`
	CommitID   *string `json:"commitId"`
}
