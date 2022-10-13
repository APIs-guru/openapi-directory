package shared

type ConfigRuleComplianceFilters struct {
	AccountID      *string             `json:"AccountId"`
	AwsRegion      *string             `json:"AwsRegion"`
	ComplianceType *ComplianceTypeEnum `json:"ComplianceType"`
	ConfigRuleName *string             `json:"ConfigRuleName"`
}
