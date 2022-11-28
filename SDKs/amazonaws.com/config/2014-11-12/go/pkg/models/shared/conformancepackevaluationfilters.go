package shared

// ConformancePackEvaluationFilters
// Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.
type ConformancePackEvaluationFilters struct {
	ComplianceType  *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
	ConfigRuleNames []string                           `json:"ConfigRuleNames,omitempty"`
	ResourceIds     []string                           `json:"ResourceIds,omitempty"`
	ResourceType    *string                            `json:"ResourceType,omitempty"`
}
