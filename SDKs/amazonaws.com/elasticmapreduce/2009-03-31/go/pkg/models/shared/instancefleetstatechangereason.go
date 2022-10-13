package shared

type InstanceFleetStateChangeReason struct {
	Code    *InstanceFleetStateChangeReasonCodeEnum `json:"Code"`
	Message *string                                 `json:"Message"`
}
