package shared

type GetFileInput struct {
	CommitSpecifier *string `json:"commitSpecifier,omitempty"`
	FilePath        string  `json:"filePath"`
	RepositoryName  string  `json:"repositoryName"`
}
