package shared

type PutFileInput struct {
	BranchName     string                `json:"branchName"`
	CommitMessage  *string               `json:"commitMessage,omitempty"`
	Email          *string               `json:"email,omitempty"`
	FileContent    string                `json:"fileContent"`
	FileMode       *FileModeTypeEnumEnum `json:"fileMode,omitempty"`
	FilePath       string                `json:"filePath"`
	Name           *string               `json:"name,omitempty"`
	ParentCommitID *string               `json:"parentCommitId,omitempty"`
	RepositoryName string                `json:"repositoryName"`
}
