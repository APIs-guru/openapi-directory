package shared

type PutLifecyclePolicyRequest struct {
	LifecyclePolicyText string  `json:"lifecyclePolicyText"`
	RegistryID          *string `json:"registryId"`
	RepositoryName      string  `json:"repositoryName"`
}
