package shared

type GetRepositoryPolicyRequest struct {
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
