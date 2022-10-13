package shared

type StartLifecyclePolicyPreviewRequest struct {
	LifecyclePolicyText *string `json:"lifecyclePolicyText"`
	RegistryID          *string `json:"registryId"`
	RepositoryName      string  `json:"repositoryName"`
}
