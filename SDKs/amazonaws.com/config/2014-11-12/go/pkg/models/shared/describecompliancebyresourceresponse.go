package shared

type DescribeComplianceByResourceResponse struct {
	ComplianceByResources []ComplianceByResource `json:"ComplianceByResources"`
	NextToken             *string                `json:"NextToken"`
}
