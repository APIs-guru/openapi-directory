package shared

// InstanceGroupStateChangeReason
// The status change reason details for the instance group.
type InstanceGroupStateChangeReason struct {
	Code    *InstanceGroupStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                                 `json:"Message,omitempty"`
}
