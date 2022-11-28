package shared

// PutEventsResultEntry
// Represents an event that failed to be submitted.
type PutEventsResultEntry struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	EventID      *string `json:"EventId,omitempty"`
}
