package shared

// DescribeComplianceByConfigRuleRequest
// <p/>
type DescribeComplianceByConfigRuleRequest struct {
	ComplianceTypes []ComplianceTypeEnum `json:"ComplianceTypes,omitempty"`
	ConfigRuleNames []string             `json:"ConfigRuleNames,omitempty"`
	NextToken       *string              `json:"NextToken,omitempty"`
}
