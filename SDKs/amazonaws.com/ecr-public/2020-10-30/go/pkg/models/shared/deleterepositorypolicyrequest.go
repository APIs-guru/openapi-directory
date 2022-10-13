package shared

type DeleteRepositoryPolicyRequest struct {
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
