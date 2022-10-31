package shared



type DeleteRepositoryPolicyResponse struct {
    PolicyText *string `json:"policyText,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    
}

