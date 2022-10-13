package shared

type CreateUnreferencedMergeCommitOutput struct {
	CommitID *string `json:"commitId"`
	TreeID   *string `json:"treeId"`
}
