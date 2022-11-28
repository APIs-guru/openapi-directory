package shared

// DescribeComplianceByConfigRuleResponse
// <p/>
type DescribeComplianceByConfigRuleResponse struct {
	ComplianceByConfigRules []ComplianceByConfigRule `json:"ComplianceByConfigRules,omitempty"`
	NextToken               *string                  `json:"NextToken,omitempty"`
}
