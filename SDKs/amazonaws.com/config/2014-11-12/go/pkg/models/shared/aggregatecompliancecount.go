package shared

type AggregateComplianceCount struct {
	ComplianceSummary *ComplianceSummary `json:"ComplianceSummary"`
	GroupName         *string            `json:"GroupName"`
}
