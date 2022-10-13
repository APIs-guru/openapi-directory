package shared

type BatchPutMessageErrorEntry struct {
	ErrorCode    *ErrorCodeEnum `json:"errorCode"`
	ErrorMessage *string        `json:"errorMessage"`
	MessageID    *string        `json:"messageId"`
}
