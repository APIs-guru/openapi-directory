package shared

// InstanceStateChangeReason
// The details of the status change reason for the instance.
type InstanceStateChangeReason struct {
	Code    *InstanceStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                            `json:"Message,omitempty"`
}
