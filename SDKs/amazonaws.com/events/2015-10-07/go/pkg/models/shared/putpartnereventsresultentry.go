package shared

type PutPartnerEventsResultEntry struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	EventID      *string `json:"EventId,omitempty"`
}
