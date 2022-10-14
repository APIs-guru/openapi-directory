package shared

type CreateCommitInput struct {
	AuthorName       *string            `json:"authorName,omitempty"`
	BranchName       string             `json:"branchName"`
	CommitMessage    *string            `json:"commitMessage,omitempty"`
	DeleteFiles      []DeleteFileEntry  `json:"deleteFiles,omitempty"`
	Email            *string            `json:"email,omitempty"`
	KeepEmptyFolders *bool              `json:"keepEmptyFolders,omitempty"`
	ParentCommitID   *string            `json:"parentCommitId,omitempty"`
	PutFiles         []PutFileEntry     `json:"putFiles,omitempty"`
	RepositoryName   string             `json:"repositoryName"`
	SetFileModes     []SetFileModeEntry `json:"setFileModes,omitempty"`
}
