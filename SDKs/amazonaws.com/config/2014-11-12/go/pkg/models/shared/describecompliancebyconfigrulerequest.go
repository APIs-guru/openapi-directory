package shared

type DescribeComplianceByConfigRuleRequest struct {
	ComplianceTypes []ComplianceTypeEnum `json:"ComplianceTypes"`
	ConfigRuleNames []string             `json:"ConfigRuleNames"`
	NextToken       *string              `json:"NextToken"`
}
