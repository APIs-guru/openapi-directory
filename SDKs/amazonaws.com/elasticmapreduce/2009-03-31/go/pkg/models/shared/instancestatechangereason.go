package shared

type InstanceStateChangeReason struct {
	Code    *InstanceStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                            `json:"Message,omitempty"`
}
