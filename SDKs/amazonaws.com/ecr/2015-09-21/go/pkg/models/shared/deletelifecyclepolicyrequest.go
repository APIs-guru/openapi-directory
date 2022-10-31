package shared



type DeleteLifecyclePolicyRequest struct {
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

