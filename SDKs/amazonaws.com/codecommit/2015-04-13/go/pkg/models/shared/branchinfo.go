package shared

// BranchInfo
// Returns information about a branch.
type BranchInfo struct {
	BranchName *string `json:"branchName,omitempty"`
	CommitID   *string `json:"commitId,omitempty"`
}
