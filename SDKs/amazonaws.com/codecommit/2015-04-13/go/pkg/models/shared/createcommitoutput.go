package shared



type CreateCommitOutput struct {
    CommitID *string `json:"commitId,omitempty"`
    FilesAdded []FileMetadata `json:"filesAdded,omitempty"`
    FilesDeleted []FileMetadata `json:"filesDeleted,omitempty"`
    FilesUpdated []FileMetadata `json:"filesUpdated,omitempty"`
    TreeID *string `json:"treeId,omitempty"`
    
}

