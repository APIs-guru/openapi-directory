package shared



type AggregateConformancePackComplianceCount struct {
    CompliantConformancePackCount *int64 `json:"CompliantConformancePackCount,omitempty"`
    NonCompliantConformancePackCount *int64 `json:"NonCompliantConformancePackCount,omitempty"`
    
}

