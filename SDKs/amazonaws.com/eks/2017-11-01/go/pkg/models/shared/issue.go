package shared

// Issue
// An object representing an issue with an Amazon EKS resource.
type Issue struct {
	Code        *NodegroupIssueCodeEnum `json:"code,omitempty"`
	Message     *string                 `json:"message,omitempty"`
	ResourceIds []string                `json:"resourceIds,omitempty"`
}
