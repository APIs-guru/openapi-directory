package shared

type MergeBranchesByFastForwardOutput struct {
	CommitID *string `json:"commitId"`
	TreeID   *string `json:"treeId"`
}
