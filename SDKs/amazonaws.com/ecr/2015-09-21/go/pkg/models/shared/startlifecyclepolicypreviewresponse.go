package shared



type StartLifecyclePolicyPreviewResponse struct {
    LifecyclePolicyText *string `json:"lifecyclePolicyText,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    Status *LifecyclePolicyPreviewStatusEnum `json:"status,omitempty"`
    
}

