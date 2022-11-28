package shared

// BatchPutAssetPropertyError
// Contains error information from updating a batch of asset property values.
type BatchPutAssetPropertyError struct {
	ErrorCode    BatchPutAssetPropertyValueErrorCodeEnum `json:"errorCode"`
	ErrorMessage string                                  `json:"errorMessage"`
	Timestamps   []TimeInNanos                           `json:"timestamps"`
}
