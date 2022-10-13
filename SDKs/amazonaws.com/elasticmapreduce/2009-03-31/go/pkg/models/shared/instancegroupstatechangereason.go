package shared

type InstanceGroupStateChangeReason struct {
	Code    *InstanceGroupStateChangeReasonCodeEnum `json:"Code"`
	Message *string                                 `json:"Message"`
}
