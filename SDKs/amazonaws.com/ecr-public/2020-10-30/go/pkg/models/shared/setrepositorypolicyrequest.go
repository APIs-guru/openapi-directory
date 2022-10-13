package shared

type SetRepositoryPolicyRequest struct {
	Force          *bool   `json:"force"`
	PolicyText     string  `json:"policyText"`
	RegistryID     *string `json:"registryId"`
	RepositoryName string  `json:"repositoryName"`
}
