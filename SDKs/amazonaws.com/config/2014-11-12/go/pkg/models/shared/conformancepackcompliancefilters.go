package shared

type ConformancePackComplianceFilters struct {
	ComplianceType  *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
	ConfigRuleNames []string                           `json:"ConfigRuleNames,omitempty"`
}
