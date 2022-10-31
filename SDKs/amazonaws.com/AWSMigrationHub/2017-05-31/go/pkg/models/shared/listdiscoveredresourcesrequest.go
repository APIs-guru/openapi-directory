package shared



type ListDiscoveredResourcesRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    MigrationTaskName string `json:"MigrationTaskName"`
    NextToken *string `json:"NextToken,omitempty"`
    ProgressUpdateStream string `json:"ProgressUpdateStream"`
    
}

