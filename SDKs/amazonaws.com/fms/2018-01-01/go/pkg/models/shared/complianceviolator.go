package shared

type ComplianceViolator struct {
	ResourceID      *string              `json:"ResourceId"`
	ResourceType    *string              `json:"ResourceType"`
	ViolationReason *ViolationReasonEnum `json:"ViolationReason"`
}
