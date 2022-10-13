package shared

type DescribeComplianceByConfigRuleResponse struct {
	ComplianceByConfigRules []ComplianceByConfigRule `json:"ComplianceByConfigRules"`
	NextToken               *string                  `json:"NextToken"`
}
