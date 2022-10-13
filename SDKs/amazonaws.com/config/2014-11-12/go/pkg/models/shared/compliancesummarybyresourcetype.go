package shared

type ComplianceSummaryByResourceType struct {
	ComplianceSummary *ComplianceSummary `json:"ComplianceSummary"`
	ResourceType      *string            `json:"ResourceType"`
}
