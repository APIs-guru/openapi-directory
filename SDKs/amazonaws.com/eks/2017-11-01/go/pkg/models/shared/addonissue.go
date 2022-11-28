package shared

// AddonIssue
// An issue related to an add-on.
type AddonIssue struct {
	Code        *AddonIssueCodeEnum `json:"code,omitempty"`
	Message     *string             `json:"message,omitempty"`
	ResourceIds []string            `json:"resourceIds,omitempty"`
}
