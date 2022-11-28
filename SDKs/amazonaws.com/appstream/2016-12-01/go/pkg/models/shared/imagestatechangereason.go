package shared

// ImageStateChangeReason
// Describes the reason why the last image state change occurred.
type ImageStateChangeReason struct {
	Code    *ImageStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                         `json:"Message,omitempty"`
}
