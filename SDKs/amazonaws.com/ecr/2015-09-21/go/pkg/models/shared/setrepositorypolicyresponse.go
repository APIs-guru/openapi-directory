package shared

type SetRepositoryPolicyResponse struct {
	PolicyText     *string `json:"policyText,omitempty"`
	RegistryID     *string `json:"registryId,omitempty"`
	RepositoryName *string `json:"repositoryName,omitempty"`
}
