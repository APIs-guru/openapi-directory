package shared



type StartLifecyclePolicyPreviewRequest struct {
    LifecyclePolicyText *string `json:"lifecyclePolicyText,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

