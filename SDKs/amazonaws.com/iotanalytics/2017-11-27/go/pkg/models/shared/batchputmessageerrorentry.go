package shared

type BatchPutMessageErrorEntry struct {
	ErrorCode    *string `json:"errorCode"`
	ErrorMessage *string `json:"errorMessage"`
	MessageID    *string `json:"messageId"`
}
