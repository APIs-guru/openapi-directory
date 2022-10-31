package shared

type DescribeComplianceByConfigRuleResponse struct {
	ComplianceByConfigRules []ComplianceByConfigRule `json:"ComplianceByConfigRules,omitempty"`
	NextToken               *string                  `json:"NextToken,omitempty"`
}
