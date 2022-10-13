package shared

type PutPartnerEventsResponse struct {
	Entries          []PutPartnerEventsResultEntry `json:"Entries"`
	FailedEntryCount *int64                        `json:"FailedEntryCount"`
}
