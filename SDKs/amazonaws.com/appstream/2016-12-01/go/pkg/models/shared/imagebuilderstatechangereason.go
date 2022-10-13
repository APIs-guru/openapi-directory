package shared

type ImageBuilderStateChangeReason struct {
	Code    *ImageBuilderStateChangeReasonCodeEnum `json:"Code"`
	Message *string                                `json:"Message"`
}
