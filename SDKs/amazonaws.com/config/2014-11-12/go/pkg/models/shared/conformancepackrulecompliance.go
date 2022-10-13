package shared

type ConformancePackRuleCompliance struct {
	ComplianceType *ConformancePackComplianceTypeEnum `json:"ComplianceType"`
	ConfigRuleName *string                            `json:"ConfigRuleName"`
	Controls       []string                           `json:"Controls"`
}
