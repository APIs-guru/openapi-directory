package shared



type DeleteFileOutput struct {
    BlobID string `json:"blobId"`
    CommitID string `json:"commitId"`
    FilePath string `json:"filePath"`
    TreeID string `json:"treeId"`
    
}

