package shared

type RepositoryNameIDPair struct {
	RepositoryID   *string `json:"repositoryId,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
