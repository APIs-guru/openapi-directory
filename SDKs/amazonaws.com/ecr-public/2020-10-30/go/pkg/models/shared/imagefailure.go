package shared

type ImageFailure struct {
	FailureCode   *ImageFailureCodeEnum `json:"failureCode,omitempty"`
	FailureReason *string               `json:"failureReason,omitempty"`
	ImageID       *ImageIdentifier      `json:"imageId,omitempty"`
}
