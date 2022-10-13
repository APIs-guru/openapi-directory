package shared

type GetDownloadURLForLayerRequest struct {
	LayerDigest    string  `json:"layerDigest"`
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
