package shared

type PutImageRequest struct {
	ImageDigest            *string `json:"imageDigest"`
	ImageManifest          string  `json:"imageManifest"`
	ImageManifestMediaType *string `json:"imageManifestMediaType"`
	ImageTag               *string `json:"imageTag"`
	RegistryID             *string `json:"registryId"`
	RepositoryName         string  `json:"repositoryName"`
}
