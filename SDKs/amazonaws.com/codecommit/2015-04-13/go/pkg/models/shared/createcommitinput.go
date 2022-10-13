package shared

type CreateCommitInput struct {
	AuthorName       *string            `json:"authorName"`
	BranchName       string             `json:"branchName"`
	CommitMessage    *string            `json:"commitMessage"`
	DeleteFiles      []DeleteFileEntry  `json:"deleteFiles"`
	Email            *string            `json:"email"`
	KeepEmptyFolders *bool              `json:"keepEmptyFolders"`
	ParentCommitID   *string            `json:"parentCommitId"`
	PutFiles         []PutFileEntry     `json:"putFiles"`
	RepositoryName   string             `json:"repositoryName"`
	SetFileModes     []SetFileModeEntry `json:"setFileModes"`
}
