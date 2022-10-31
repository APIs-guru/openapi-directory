package shared



type TestReportSummary struct {
    DurationInNanoSeconds int64 `json:"durationInNanoSeconds"`
    StatusCounts map[string]int64 `json:"statusCounts"`
    Total int64 `json:"total"`
    
}

