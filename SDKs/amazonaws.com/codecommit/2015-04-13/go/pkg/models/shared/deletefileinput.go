package shared

type DeleteFileInput struct {
	BranchName       string  `json:"branchName"`
	CommitMessage    *string `json:"commitMessage"`
	Email            *string `json:"email"`
	FilePath         string  `json:"filePath"`
	KeepEmptyFolders *bool   `json:"keepEmptyFolders"`
	Name             *string `json:"name"`
	ParentCommitID   string  `json:"parentCommitId"`
	RepositoryName   string  `json:"repositoryName"`
}
