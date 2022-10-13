package shared

type GetFileInput struct {
	CommitSpecifier *string `json:"commitSpecifier"`
	FilePath        string  `json:"filePath"`
	RepositoryName  string  `json:"repositoryName"`
}
