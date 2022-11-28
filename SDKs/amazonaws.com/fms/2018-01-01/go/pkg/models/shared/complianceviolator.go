package shared

// ComplianceViolator
// Details of the resource that is not protected by the policy.
type ComplianceViolator struct {
	ResourceID      *string              `json:"ResourceId,omitempty"`
	ResourceType    *string              `json:"ResourceType,omitempty"`
	ViolationReason *ViolationReasonEnum `json:"ViolationReason,omitempty"`
}
