package shared



type ListMigrationTasksRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceName *string `json:"ResourceName,omitempty"`
    
}

