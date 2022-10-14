package shared

type ComplianceViolator struct {
	ResourceID      *string              `json:"ResourceId,omitempty"`
	ResourceType    *string              `json:"ResourceType,omitempty"`
	ViolationReason *ViolationReasonEnum `json:"ViolationReason,omitempty"`
}
