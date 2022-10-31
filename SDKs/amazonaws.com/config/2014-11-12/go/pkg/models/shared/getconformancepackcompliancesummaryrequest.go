package shared



type GetConformancePackComplianceSummaryRequest struct {
    ConformancePackNames []string `json:"ConformancePackNames"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

