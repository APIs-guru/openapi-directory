package shared



type ConformancePackEvaluationFilters struct {
    ComplianceType *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
    ConfigRuleNames []string `json:"ConfigRuleNames,omitempty"`
    ResourceIds []string `json:"ResourceIds,omitempty"`
    ResourceType *string `json:"ResourceType,omitempty"`
    
}

