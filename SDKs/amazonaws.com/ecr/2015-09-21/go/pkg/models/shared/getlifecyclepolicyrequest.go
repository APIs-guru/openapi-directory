package shared



type GetLifecyclePolicyRequest struct {
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

