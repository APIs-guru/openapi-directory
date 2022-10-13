package shared

type GetComplianceDetailsByResourceRequest struct {
	ComplianceTypes []ComplianceTypeEnum `json:"ComplianceTypes"`
	NextToken       *string              `json:"NextToken"`
	ResourceID      string               `json:"ResourceId"`
	ResourceType    string               `json:"ResourceType"`
}
