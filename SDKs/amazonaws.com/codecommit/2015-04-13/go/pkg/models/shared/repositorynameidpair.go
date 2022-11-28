package shared

// RepositoryNameIDPair
// Information about a repository name and ID.
type RepositoryNameIDPair struct {
	RepositoryID   *string `json:"repositoryId,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
