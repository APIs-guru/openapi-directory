package shared

type AggregateConformancePackComplianceCount struct {
	CompliantConformancePackCount    *int64 `json:"CompliantConformancePackCount"`
	NonCompliantConformancePackCount *int64 `json:"NonCompliantConformancePackCount"`
}
