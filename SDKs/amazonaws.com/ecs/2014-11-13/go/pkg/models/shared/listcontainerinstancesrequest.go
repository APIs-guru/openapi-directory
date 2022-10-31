package shared



type ListContainerInstancesRequest struct {
    Cluster *string `json:"cluster,omitempty"`
    Filter *string `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    Status *ContainerInstanceStatusEnum `json:"status,omitempty"`
    
}

