package shared



type ListReportsInput struct {
    Filter *ReportFilter `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SortOrder *SortOrderTypeEnum `json:"sortOrder,omitempty"`
    
}

