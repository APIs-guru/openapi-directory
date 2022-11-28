package shared

// ImageBuilderStateChangeReason
// Describes the reason why the last image builder state change occurred.
type ImageBuilderStateChangeReason struct {
	Code    *ImageBuilderStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                                `json:"Message,omitempty"`
}
