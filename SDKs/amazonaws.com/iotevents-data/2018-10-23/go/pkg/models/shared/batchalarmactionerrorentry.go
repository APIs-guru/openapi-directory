package shared

type BatchAlarmActionErrorEntry struct {
	ErrorCode    *ErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage *string        `json:"errorMessage,omitempty"`
	RequestID    *string        `json:"requestId,omitempty"`
}
