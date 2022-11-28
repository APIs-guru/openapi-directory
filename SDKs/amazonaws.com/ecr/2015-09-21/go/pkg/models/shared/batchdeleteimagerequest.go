package shared

// BatchDeleteImageRequest
// Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.
type BatchDeleteImageRequest struct {
	ImageIds       []ImageIdentifier `json:"imageIds"`
	RegistryID     *string           `json:"registryId,omitempty"`
	RepositoryName string            `json:"repositoryName"`
}
