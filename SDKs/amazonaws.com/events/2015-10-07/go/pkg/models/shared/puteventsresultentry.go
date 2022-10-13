package shared

type PutEventsResultEntry struct {
	ErrorCode    *string `json:"ErrorCode"`
	ErrorMessage *string `json:"ErrorMessage"`
	EventID      *string `json:"EventId"`
}
