package shared

type PutImageTagMutabilityResponse struct {
	ImageTagMutability *ImageTagMutabilityEnum `json:"imageTagMutability,omitempty"`
	RegistryID         *string                 `json:"registryId,omitempty"`
	RepositoryName     *string                 `json:"repositoryName,omitempty"`
}
