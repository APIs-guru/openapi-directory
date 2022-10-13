package shared

type MergeBranchesBySquashOutput struct {
	CommitID *string `json:"commitId"`
	TreeID   *string `json:"treeId"`
}
