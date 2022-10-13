package shared

type BatchCheckLayerAvailabilityRequest struct {
	LayerDigests   []string `json:"layerDigests"`
	RegistryID     *string  `json:"registryId"`
	RepositoryName string   `json:"repositoryName"`
}
