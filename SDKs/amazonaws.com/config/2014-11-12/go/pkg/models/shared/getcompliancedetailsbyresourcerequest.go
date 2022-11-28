package shared

// GetComplianceDetailsByResourceRequest
// <p/>
type GetComplianceDetailsByResourceRequest struct {
	ComplianceTypes []ComplianceTypeEnum `json:"ComplianceTypes,omitempty"`
	NextToken       *string              `json:"NextToken,omitempty"`
	ResourceID      string               `json:"ResourceId"`
	ResourceType    string               `json:"ResourceType"`
}
