package shared

type DeleteLifecyclePolicyRequest struct {
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
