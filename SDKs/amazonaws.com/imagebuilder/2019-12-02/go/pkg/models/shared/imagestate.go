package shared

type ImageState struct {
	Reason *string          `json:"reason"`
	Status *ImageStatusEnum `json:"status"`
}
