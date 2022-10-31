package shared



type GetConformancePackComplianceDetailsRequest struct {
    ConformancePackName string `json:"ConformancePackName"`
    Filters *ConformancePackEvaluationFilters `json:"Filters,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

