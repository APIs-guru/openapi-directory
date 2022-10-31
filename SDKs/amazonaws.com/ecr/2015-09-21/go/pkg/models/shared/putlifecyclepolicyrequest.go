package shared



type PutLifecyclePolicyRequest struct {
    LifecyclePolicyText string `json:"lifecyclePolicyText"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

