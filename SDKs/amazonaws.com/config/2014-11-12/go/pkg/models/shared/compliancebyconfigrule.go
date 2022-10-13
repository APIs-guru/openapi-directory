package shared

type ComplianceByConfigRule struct {
	Compliance     *Compliance `json:"Compliance"`
	ConfigRuleName *string     `json:"ConfigRuleName"`
}
