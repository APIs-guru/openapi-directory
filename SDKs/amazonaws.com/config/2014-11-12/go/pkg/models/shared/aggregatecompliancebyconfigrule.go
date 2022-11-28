package shared

// AggregateComplianceByConfigRule
// <p>Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>
type AggregateComplianceByConfigRule struct {
	AccountID      *string     `json:"AccountId,omitempty"`
	AwsRegion      *string     `json:"AwsRegion,omitempty"`
	Compliance     *Compliance `json:"Compliance,omitempty"`
	ConfigRuleName *string     `json:"ConfigRuleName,omitempty"`
}
