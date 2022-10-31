package shared



type ConformancePackRuleCompliance struct {
    ComplianceType *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
    ConfigRuleName *string `json:"ConfigRuleName,omitempty"`
    Controls []string `json:"Controls,omitempty"`
    
}

