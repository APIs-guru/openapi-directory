package shared

type GetComplianceDetailsByConfigRuleRequest struct {
	ComplianceTypes []ComplianceTypeEnum `json:"ComplianceTypes"`
	ConfigRuleName  string               `json:"ConfigRuleName"`
	Limit           *int64               `json:"Limit"`
	NextToken       *string              `json:"NextToken"`
}
