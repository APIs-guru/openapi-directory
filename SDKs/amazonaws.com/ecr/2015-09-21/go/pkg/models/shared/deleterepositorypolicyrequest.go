package shared



type DeleteRepositoryPolicyRequest struct {
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

