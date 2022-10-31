package shared



type ListSharedReportGroupsInput struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SortBy *SharedResourceSortByTypeEnum `json:"sortBy,omitempty"`
    SortOrder *SortOrderTypeEnum `json:"sortOrder,omitempty"`
    
}

