package shared



type DeleteFileInput struct {
    BranchName string `json:"branchName"`
    CommitMessage *string `json:"commitMessage,omitempty"`
    Email *string `json:"email,omitempty"`
    FilePath string `json:"filePath"`
    KeepEmptyFolders *bool `json:"keepEmptyFolders,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentCommitID string `json:"parentCommitId"`
    RepositoryName string `json:"repositoryName"`
    
}

