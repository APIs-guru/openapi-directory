package shared

type AggregateConformancePackCompliance struct {
	ComplianceType        *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
	CompliantRuleCount    *int64                             `json:"CompliantRuleCount,omitempty"`
	NonCompliantRuleCount *int64                             `json:"NonCompliantRuleCount,omitempty"`
	TotalRuleCount        *int64                             `json:"TotalRuleCount,omitempty"`
}
