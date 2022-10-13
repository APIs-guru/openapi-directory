package shared

type ImageStateChangeReason struct {
	Code    *ImageStateChangeReasonCodeEnum `json:"Code"`
	Message *string                         `json:"Message"`
}
