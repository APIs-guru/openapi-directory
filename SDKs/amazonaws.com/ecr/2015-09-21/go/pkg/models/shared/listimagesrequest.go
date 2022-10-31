package shared



type ListImagesRequest struct {
    Filter *ListImagesFilter `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RegistryID *string `json:"registryId,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

