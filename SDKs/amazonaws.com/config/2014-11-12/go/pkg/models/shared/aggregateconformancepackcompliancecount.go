package shared

// AggregateConformancePackComplianceCount
// The number of conformance packs that are compliant and noncompliant.
type AggregateConformancePackComplianceCount struct {
	CompliantConformancePackCount    *int64 `json:"CompliantConformancePackCount,omitempty"`
	NonCompliantConformancePackCount *int64 `json:"NonCompliantConformancePackCount,omitempty"`
}
