package shared

type CreateCommitOutput struct {
	CommitID     *string        `json:"commitId"`
	FilesAdded   []FileMetadata `json:"filesAdded"`
	FilesDeleted []FileMetadata `json:"filesDeleted"`
	FilesUpdated []FileMetadata `json:"filesUpdated"`
	TreeID       *string        `json:"treeId"`
}
