package shared



type ListBuildBatchesInput struct {
    Filter *BuildBatchFilter `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SortOrder *SortOrderTypeEnum `json:"sortOrder,omitempty"`
    
}

