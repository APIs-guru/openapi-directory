package shared



type GetReportGroupTrendOutput struct {
    RawData []ReportWithRawData `json:"rawData,omitempty"`
    Stats *ReportGroupTrendStats `json:"stats,omitempty"`
    
}

