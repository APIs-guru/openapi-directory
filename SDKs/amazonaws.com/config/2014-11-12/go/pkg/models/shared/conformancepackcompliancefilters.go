package shared

type ConformancePackComplianceFilters struct {
	ComplianceType  *ConformancePackComplianceTypeEnum `json:"ComplianceType"`
	ConfigRuleNames []string                           `json:"ConfigRuleNames"`
}
