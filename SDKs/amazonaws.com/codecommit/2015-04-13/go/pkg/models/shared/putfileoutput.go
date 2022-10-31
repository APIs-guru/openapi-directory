package shared



type PutFileOutput struct {
    BlobID string `json:"blobId"`
    CommitID string `json:"commitId"`
    TreeID string `json:"treeId"`
    
}

