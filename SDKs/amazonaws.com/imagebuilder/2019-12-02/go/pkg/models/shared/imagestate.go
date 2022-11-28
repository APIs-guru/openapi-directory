package shared

// ImageState
//
//	Image state shows the image status and the reason for that status.
type ImageState struct {
	Reason *string          `json:"reason,omitempty"`
	Status *ImageStatusEnum `json:"status,omitempty"`
}
