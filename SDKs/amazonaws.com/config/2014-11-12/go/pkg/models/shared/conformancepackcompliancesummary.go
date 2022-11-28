package shared

// ConformancePackComplianceSummary
// Summary includes the name and status of the conformance pack.
type ConformancePackComplianceSummary struct {
	ConformancePackComplianceStatus ConformancePackComplianceTypeEnum `json:"ConformancePackComplianceStatus"`
	ConformancePackName             string                            `json:"ConformancePackName"`
}
