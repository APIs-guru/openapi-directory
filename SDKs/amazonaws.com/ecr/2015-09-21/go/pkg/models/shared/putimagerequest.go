package shared

type PutImageRequest struct {
	ImageDigest            *string `json:"imageDigest,omitempty"`
	ImageManifest          string  `json:"imageManifest"`
	ImageManifestMediaType *string `json:"imageManifestMediaType,omitempty"`
	ImageTag               *string `json:"imageTag,omitempty"`
	RegistryID             *string `json:"registryId,omitempty"`
	RepositoryName         string  `json:"repositoryName"`
}
