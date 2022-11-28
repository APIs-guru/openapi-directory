package shared

// BatchWriteException
// A <code>BatchWrite</code> exception has occurred.
type BatchWriteException struct {
	Index   *int64                       `json:"Index,omitempty"`
	Message *string                      `json:"Message,omitempty"`
	Type    *BatchWriteExceptionTypeEnum `json:"Type,omitempty"`
}
