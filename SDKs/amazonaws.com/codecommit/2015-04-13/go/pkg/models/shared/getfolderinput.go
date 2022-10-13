package shared

type GetFolderInput struct {
	CommitSpecifier *string `json:"commitSpecifier"`
	FolderPath      string  `json:"folderPath"`
	RepositoryName  string  `json:"repositoryName"`
}
