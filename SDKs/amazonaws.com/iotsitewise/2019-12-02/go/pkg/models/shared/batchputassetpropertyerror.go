package shared

type BatchPutAssetPropertyError struct {
	ErrorCode    BatchPutAssetPropertyValueErrorCodeEnum `json:"errorCode"`
	ErrorMessage string                                  `json:"errorMessage"`
	Timestamps   []TimeInNanos                           `json:"timestamps"`
}
