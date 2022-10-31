package shared



type GetLifecyclePolicyPreviewRequest struct {
    Filter *LifecyclePolicyPreviewFilter `json:"filter,omitempty"`
    ImageIds []ImageIdentifier `json:"imageIds,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

