package shared

type Image struct {
	ImageID                *ImageIdentifier `json:"imageId"`
	ImageManifest          *string          `json:"imageManifest"`
	ImageManifestMediaType *string          `json:"imageManifestMediaType"`
	RegistryID             *string          `json:"registryId"`
	RepositoryName         *string          `json:"repositoryName"`
}
