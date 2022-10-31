package shared

type GetRepositoryPolicyRequest struct {
	RegistryID     *string `json:"registryId,omitempty"`
	RepositoryName string  `json:"repositoryName"`
}
