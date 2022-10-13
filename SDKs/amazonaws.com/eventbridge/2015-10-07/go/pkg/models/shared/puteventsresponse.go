package shared

type PutEventsResponse struct {
	Entries          []PutEventsResultEntry `json:"Entries"`
	FailedEntryCount *int64                 `json:"FailedEntryCount"`
}
