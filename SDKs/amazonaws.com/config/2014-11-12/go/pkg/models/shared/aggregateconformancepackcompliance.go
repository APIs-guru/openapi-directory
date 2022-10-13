package shared

type AggregateConformancePackCompliance struct {
	ComplianceType        *ConformancePackComplianceTypeEnum `json:"ComplianceType"`
	CompliantRuleCount    *int64                             `json:"CompliantRuleCount"`
	NonCompliantRuleCount *int64                             `json:"NonCompliantRuleCount"`
	TotalRuleCount        *int64                             `json:"TotalRuleCount"`
}
