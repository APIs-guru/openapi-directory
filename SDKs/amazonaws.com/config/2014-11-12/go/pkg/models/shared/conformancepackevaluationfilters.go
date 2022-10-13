package shared

type ConformancePackEvaluationFilters struct {
	ComplianceType  *ConformancePackComplianceTypeEnum `json:"ComplianceType"`
	ConfigRuleNames []string                           `json:"ConfigRuleNames"`
	ResourceIds     []string                           `json:"ResourceIds"`
	ResourceType    *string                            `json:"ResourceType"`
}
