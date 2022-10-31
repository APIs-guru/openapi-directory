package shared



type DescribeComplianceByResourceRequest struct {
    ComplianceTypes []ComplianceTypeEnum `json:"ComplianceTypes,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceID *string `json:"ResourceId,omitempty"`
    ResourceType *string `json:"ResourceType,omitempty"`
    
}

