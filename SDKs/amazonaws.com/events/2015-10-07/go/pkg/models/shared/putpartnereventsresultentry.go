package shared

type PutPartnerEventsResultEntry struct {
	ErrorCode    *string `json:"ErrorCode"`
	ErrorMessage *string `json:"ErrorMessage"`
	EventID      *string `json:"EventId"`
}
