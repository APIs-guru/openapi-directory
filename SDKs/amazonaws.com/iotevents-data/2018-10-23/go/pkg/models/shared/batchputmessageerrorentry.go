package shared

// BatchPutMessageErrorEntry
// Contains information about the errors encountered.
type BatchPutMessageErrorEntry struct {
	ErrorCode    *ErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage *string        `json:"errorMessage,omitempty"`
	MessageID    *string        `json:"messageId,omitempty"`
}
