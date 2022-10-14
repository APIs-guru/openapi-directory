package shared

type GetAggregateComplianceDetailsByConfigRuleRequest struct {
	AccountID                   string              `json:"AccountId"`
	AwsRegion                   string              `json:"AwsRegion"`
	ComplianceType              *ComplianceTypeEnum `json:"ComplianceType,omitempty"`
	ConfigRuleName              string              `json:"ConfigRuleName"`
	ConfigurationAggregatorName string              `json:"ConfigurationAggregatorName"`
	Limit                       *int64              `json:"Limit,omitempty"`
	NextToken                   *string             `json:"NextToken,omitempty"`
}
