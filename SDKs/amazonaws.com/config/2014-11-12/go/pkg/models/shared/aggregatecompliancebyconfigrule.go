package shared

type AggregateComplianceByConfigRule struct {
	AccountID      *string     `json:"AccountId"`
	AwsRegion      *string     `json:"AwsRegion"`
	Compliance     *Compliance `json:"Compliance"`
	ConfigRuleName *string     `json:"ConfigRuleName"`
}
