package shared

// AggregateConformancePackComplianceSummary
// Provides a summary of compliance based on either account ID or region.
type AggregateConformancePackComplianceSummary struct {
	ComplianceSummary *AggregateConformancePackComplianceCount `json:"ComplianceSummary,omitempty"`
	GroupName         *string                                  `json:"GroupName,omitempty"`
}
