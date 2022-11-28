package shared

// BatchPutMessageErrorEntry
// Contains informations about errors.
type BatchPutMessageErrorEntry struct {
	ErrorCode    *string `json:"errorCode,omitempty"`
	ErrorMessage *string `json:"errorMessage,omitempty"`
	MessageID    *string `json:"messageId,omitempty"`
}
