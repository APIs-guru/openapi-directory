package shared



type GetLifecyclePolicyPreviewResponse struct {
    LifecyclePolicyText *string `json:"lifecyclePolicyText,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PreviewResults []LifecyclePolicyPreviewResult `json:"previewResults,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    Status *LifecyclePolicyPreviewStatusEnum `json:"status,omitempty"`
    Summary *LifecyclePolicyPreviewSummary `json:"summary,omitempty"`
    
}

