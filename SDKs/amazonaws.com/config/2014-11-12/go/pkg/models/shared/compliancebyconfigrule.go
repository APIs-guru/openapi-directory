package shared

// ComplianceByConfigRule
// Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.
type ComplianceByConfigRule struct {
	Compliance     *Compliance `json:"Compliance,omitempty"`
	ConfigRuleName *string     `json:"ConfigRuleName,omitempty"`
}
