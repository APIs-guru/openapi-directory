package shared

// ConformancePackRuleCompliance
// Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.
type ConformancePackRuleCompliance struct {
	ComplianceType *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
	ConfigRuleName *string                            `json:"ConfigRuleName,omitempty"`
	Controls       []string                           `json:"Controls,omitempty"`
}
