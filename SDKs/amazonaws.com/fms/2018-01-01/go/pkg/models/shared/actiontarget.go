package shared

// ActionTarget
// Describes a remediation action target.
type ActionTarget struct {
	Description *string `json:"Description,omitempty"`
	ResourceID  *string `json:"ResourceId,omitempty"`
}
