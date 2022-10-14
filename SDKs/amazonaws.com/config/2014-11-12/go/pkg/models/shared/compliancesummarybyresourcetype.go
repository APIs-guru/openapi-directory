package shared

type ComplianceSummaryByResourceType struct {
	ComplianceSummary *ComplianceSummary `json:"ComplianceSummary,omitempty"`
	ResourceType      *string            `json:"ResourceType,omitempty"`
}
