package shared

type GetLifecyclePolicyRequest struct {
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
