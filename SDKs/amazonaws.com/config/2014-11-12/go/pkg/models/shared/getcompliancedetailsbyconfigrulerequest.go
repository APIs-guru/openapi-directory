package shared



type GetComplianceDetailsByConfigRuleRequest struct {
    ComplianceTypes []ComplianceTypeEnum `json:"ComplianceTypes,omitempty"`
    ConfigRuleName string `json:"ConfigRuleName"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

