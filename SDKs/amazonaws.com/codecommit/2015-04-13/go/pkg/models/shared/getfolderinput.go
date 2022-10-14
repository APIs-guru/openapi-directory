package shared

type GetFolderInput struct {
	CommitSpecifier *string `json:"commitSpecifier,omitempty"`
	FolderPath      string  `json:"folderPath"`
	RepositoryName  string  `json:"repositoryName"`
}
