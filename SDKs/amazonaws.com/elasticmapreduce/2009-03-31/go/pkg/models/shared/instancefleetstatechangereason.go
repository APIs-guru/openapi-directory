package shared

type InstanceFleetStateChangeReason struct {
	Code    *InstanceFleetStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                                 `json:"Message,omitempty"`
}
