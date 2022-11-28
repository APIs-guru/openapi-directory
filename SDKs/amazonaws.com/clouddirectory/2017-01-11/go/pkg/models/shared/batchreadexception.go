package shared

// BatchReadException
// The batch read exception structure, which contains the exception type and message.
type BatchReadException struct {
	Message *string                     `json:"Message,omitempty"`
	Type    *BatchReadExceptionTypeEnum `json:"Type,omitempty"`
}
