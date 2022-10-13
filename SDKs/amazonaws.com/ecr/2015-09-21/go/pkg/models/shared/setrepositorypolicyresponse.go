package shared

type SetRepositoryPolicyResponse struct {
	PolicyText     *string `json:"policyText"`
	RegistryID     *string `json:"registryId"`
	RepositoryName *string `json:"repositoryName"`
}
