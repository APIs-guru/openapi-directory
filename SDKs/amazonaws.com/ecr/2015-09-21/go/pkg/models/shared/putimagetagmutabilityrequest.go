package shared

type PutImageTagMutabilityRequest struct {
	ImageTagMutability ImageTagMutabilityEnum `json:"imageTagMutability"`
	RegistryID         *string                `json:"registryId"`
	RepositoryName     string                 `json:"repositoryName"`
}
