package shared

// ConfigRuleComplianceFilters
// Filters the compliance results based on account ID, region, compliance type, and rule name.
type ConfigRuleComplianceFilters struct {
	AccountID      *string             `json:"AccountId,omitempty"`
	AwsRegion      *string             `json:"AwsRegion,omitempty"`
	ComplianceType *ComplianceTypeEnum `json:"ComplianceType,omitempty"`
	ConfigRuleName *string             `json:"ConfigRuleName,omitempty"`
}
