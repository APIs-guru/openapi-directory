package shared



type AggregateConformancePackComplianceFilters struct {
    AccountID *string `json:"AccountId,omitempty"`
    AwsRegion *string `json:"AwsRegion,omitempty"`
    ComplianceType *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
    ConformancePackName *string `json:"ConformancePackName,omitempty"`
    
}

