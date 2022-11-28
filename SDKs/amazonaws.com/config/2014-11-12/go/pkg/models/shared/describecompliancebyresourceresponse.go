package shared

// DescribeComplianceByResourceResponse
// <p/>
type DescribeComplianceByResourceResponse struct {
	ComplianceByResources []ComplianceByResource `json:"ComplianceByResources,omitempty"`
	NextToken             *string                `json:"NextToken,omitempty"`
}
