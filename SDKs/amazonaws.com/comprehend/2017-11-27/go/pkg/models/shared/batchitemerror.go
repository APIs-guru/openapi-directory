package shared

// BatchItemError
// Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.
type BatchItemError struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	Index        *int64  `json:"Index,omitempty"`
}
