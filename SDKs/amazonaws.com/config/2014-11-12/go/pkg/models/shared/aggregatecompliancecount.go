package shared

// AggregateComplianceCount
// Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
type AggregateComplianceCount struct {
	ComplianceSummary *ComplianceSummary `json:"ComplianceSummary,omitempty"`
	GroupName         *string            `json:"GroupName,omitempty"`
}
