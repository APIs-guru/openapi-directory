package shared

type AggregateComplianceCount struct {
	ComplianceSummary *ComplianceSummary `json:"ComplianceSummary,omitempty"`
	GroupName         *string            `json:"GroupName,omitempty"`
}
