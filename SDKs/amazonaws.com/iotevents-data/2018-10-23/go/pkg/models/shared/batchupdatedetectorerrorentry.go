package shared

// BatchUpdateDetectorErrorEntry
// Information about the error that occurred when attempting to update a detector.
type BatchUpdateDetectorErrorEntry struct {
	ErrorCode    *ErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage *string        `json:"errorMessage,omitempty"`
	MessageID    *string        `json:"messageId,omitempty"`
}
