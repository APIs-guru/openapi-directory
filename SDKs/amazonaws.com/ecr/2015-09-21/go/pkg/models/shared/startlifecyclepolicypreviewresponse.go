package shared

type StartLifecyclePolicyPreviewResponse struct {
	LifecyclePolicyText *string                           `json:"lifecyclePolicyText"`
	RegistryID          *string                           `json:"registryId"`
	RepositoryName      *string                           `json:"repositoryName"`
	Status              *LifecyclePolicyPreviewStatusEnum `json:"status"`
}
