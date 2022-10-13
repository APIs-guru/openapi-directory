package shared

type GetAggregateComplianceDetailsByConfigRuleRequest struct {
	AccountID                   string              `json:"AccountId"`
	AwsRegion                   string              `json:"AwsRegion"`
	ComplianceType              *ComplianceTypeEnum `json:"ComplianceType"`
	ConfigRuleName              string              `json:"ConfigRuleName"`
	ConfigurationAggregatorName string              `json:"ConfigurationAggregatorName"`
	Limit                       *int64              `json:"Limit"`
	NextToken                   *string             `json:"NextToken"`
}
