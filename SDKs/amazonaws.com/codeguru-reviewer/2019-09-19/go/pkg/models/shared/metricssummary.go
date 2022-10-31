package shared



type MetricsSummary struct {
    FindingsCount *int64 `json:"FindingsCount,omitempty"`
    MeteredLinesOfCodeCount *int64 `json:"MeteredLinesOfCodeCount,omitempty"`
    
}

