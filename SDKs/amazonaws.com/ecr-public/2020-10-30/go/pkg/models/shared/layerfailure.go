package shared

type LayerFailure struct {
	FailureCode   *LayerFailureCodeEnum `json:"failureCode"`
	FailureReason *string               `json:"failureReason"`
	LayerDigest   *string               `json:"layerDigest"`
}
