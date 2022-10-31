package shared



type ListReportsForReportGroupInput struct {
    Filter *ReportFilter `json:"filter,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ReportGroupArn string `json:"reportGroupArn"`
    SortOrder *SortOrderTypeEnum `json:"sortOrder,omitempty"`
    
}

