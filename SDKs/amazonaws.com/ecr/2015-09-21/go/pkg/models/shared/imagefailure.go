package shared

type ImageFailure struct {
	FailureCode   *ImageFailureCodeEnum `json:"failureCode"`
	FailureReason *string               `json:"failureReason"`
	ImageID       *ImageIdentifier      `json:"imageId"`
}
