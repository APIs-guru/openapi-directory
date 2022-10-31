package shared



type ConfigRuleComplianceFilters struct {
    AccountID *string `json:"AccountId,omitempty"`
    AwsRegion *string `json:"AwsRegion,omitempty"`
    ComplianceType *ComplianceTypeEnum `json:"ComplianceType,omitempty"`
    ConfigRuleName *string `json:"ConfigRuleName,omitempty"`
    
}

