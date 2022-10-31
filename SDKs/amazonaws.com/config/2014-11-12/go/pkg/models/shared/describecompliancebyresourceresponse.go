package shared



type DescribeComplianceByResourceResponse struct {
    ComplianceByResources []ComplianceByResource `json:"ComplianceByResources,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

