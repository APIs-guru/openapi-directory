package shared

type SetRepositoryPolicyRequest struct {
	Force          *bool   `json:"force,omitempty"`
	PolicyText     string  `json:"policyText"`
	RegistryID     *string `json:"registryId,omitempty"`
	RepositoryName string  `json:"repositoryName"`
}
