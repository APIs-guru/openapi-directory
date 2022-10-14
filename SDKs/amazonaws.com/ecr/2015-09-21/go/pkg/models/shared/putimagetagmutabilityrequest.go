package shared

type PutImageTagMutabilityRequest struct {
	ImageTagMutability ImageTagMutabilityEnum `json:"imageTagMutability"`
	RegistryID         *string                `json:"registryId,omitempty"`
	RepositoryName     string                 `json:"repositoryName"`
}
