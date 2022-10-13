package shared

type PutFileInput struct {
	BranchName     string                `json:"branchName"`
	CommitMessage  *string               `json:"commitMessage"`
	Email          *string               `json:"email"`
	FileContent    string                `json:"fileContent"`
	FileMode       *FileModeTypeEnumEnum `json:"fileMode"`
	FilePath       string                `json:"filePath"`
	Name           *string               `json:"name"`
	ParentCommitID *string               `json:"parentCommitId"`
	RepositoryName string                `json:"repositoryName"`
}
