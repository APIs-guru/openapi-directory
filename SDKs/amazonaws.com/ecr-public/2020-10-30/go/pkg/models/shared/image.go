package shared

// Image
// An object representing an Amazon ECR image.
type Image struct {
	ImageID                *ImageIdentifier `json:"imageId,omitempty"`
	ImageManifest          *string          `json:"imageManifest,omitempty"`
	ImageManifestMediaType *string          `json:"imageManifestMediaType,omitempty"`
	RegistryID             *string          `json:"registryId,omitempty"`
	RepositoryName         *string          `json:"repositoryName,omitempty"`
}
