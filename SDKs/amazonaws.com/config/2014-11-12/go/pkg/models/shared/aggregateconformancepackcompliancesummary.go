package shared

type AggregateConformancePackComplianceSummary struct {
	ComplianceSummary *AggregateConformancePackComplianceCount `json:"ComplianceSummary"`
	GroupName         *string                                  `json:"GroupName"`
}
