package shared

type GetDownloadURLForLayerRequest struct {
	LayerDigest    string  `json:"layerDigest"`
	RegistryID     *string `json:"registryId,omitempty"`
	RepositoryName string  `json:"repositoryName"`
}
