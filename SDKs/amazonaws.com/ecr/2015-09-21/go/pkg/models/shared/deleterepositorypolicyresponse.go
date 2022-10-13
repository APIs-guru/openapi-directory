package shared

type DeleteRepositoryPolicyResponse struct {
	PolicyText     *string `json:"policyText"`
	RegistryID     *string `json:"registryId"`
	RepositoryName *string `json:"repositoryName"`
}
