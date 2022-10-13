package shared

type BatchUpdateDetectorErrorEntry struct {
	ErrorCode    *ErrorCodeEnum `json:"errorCode"`
	ErrorMessage *string        `json:"errorMessage"`
	MessageID    *string        `json:"messageId"`
}
