package shared

// LayerFailure
// An object representing an Amazon ECR image layer failure.
type LayerFailure struct {
	FailureCode   *LayerFailureCodeEnum `json:"failureCode,omitempty"`
	FailureReason *string               `json:"failureReason,omitempty"`
	LayerDigest   *string               `json:"layerDigest,omitempty"`
}
