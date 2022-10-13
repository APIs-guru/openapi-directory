package shared

type InstanceStateChangeReason struct {
	Code    *InstanceStateChangeReasonCodeEnum `json:"Code"`
	Message *string                            `json:"Message"`
}
