package shared

type BatchAlarmActionErrorEntry struct {
	ErrorCode    *ErrorCodeEnum `json:"errorCode"`
	ErrorMessage *string        `json:"errorMessage"`
	RequestID    *string        `json:"requestId"`
}
