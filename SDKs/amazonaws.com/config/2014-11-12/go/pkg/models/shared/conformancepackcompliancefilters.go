package shared

// ConformancePackComplianceFilters
// Filters the conformance pack by compliance types and Config rule names.
type ConformancePackComplianceFilters struct {
	ComplianceType  *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
	ConfigRuleNames []string                           `json:"ConfigRuleNames,omitempty"`
}
