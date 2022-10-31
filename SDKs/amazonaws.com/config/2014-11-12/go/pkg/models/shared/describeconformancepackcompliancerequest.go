package shared



type DescribeConformancePackComplianceRequest struct {
    ConformancePackName string `json:"ConformancePackName"`
    Filters *ConformancePackComplianceFilters `json:"Filters,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

