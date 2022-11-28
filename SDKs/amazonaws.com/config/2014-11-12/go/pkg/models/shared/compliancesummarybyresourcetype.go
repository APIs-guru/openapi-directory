package shared

// ComplianceSummaryByResourceType
// The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.
type ComplianceSummaryByResourceType struct {
	ComplianceSummary *ComplianceSummary `json:"ComplianceSummary,omitempty"`
	ResourceType      *string            `json:"ResourceType,omitempty"`
}
