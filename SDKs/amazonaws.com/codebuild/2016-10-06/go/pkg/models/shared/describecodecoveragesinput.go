package shared



type DescribeCodeCoveragesInput struct {
    MaxLineCoveragePercentage *float64 `json:"maxLineCoveragePercentage,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    MinLineCoveragePercentage *float64 `json:"minLineCoveragePercentage,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ReportArn string `json:"reportArn"`
    SortBy *ReportCodeCoverageSortByTypeEnum `json:"sortBy,omitempty"`
    SortOrder *SortOrderTypeEnum `json:"sortOrder,omitempty"`
    
}

