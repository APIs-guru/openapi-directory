package shared

type PutImageTagMutabilityResponse struct {
	ImageTagMutability *ImageTagMutabilityEnum `json:"imageTagMutability"`
	RegistryID         *string                 `json:"registryId"`
	RepositoryName     *string                 `json:"repositoryName"`
}
