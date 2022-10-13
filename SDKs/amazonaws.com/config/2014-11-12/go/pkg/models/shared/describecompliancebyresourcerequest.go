package shared

type DescribeComplianceByResourceRequest struct {
	ComplianceTypes []ComplianceTypeEnum `json:"ComplianceTypes"`
	Limit           *int64               `json:"Limit"`
	NextToken       *string              `json:"NextToken"`
	ResourceID      *string              `json:"ResourceId"`
	ResourceType    *string              `json:"ResourceType"`
}
