package shared



type PutPartnerEventsResponse struct {
    Entries []PutPartnerEventsResultEntry `json:"Entries,omitempty"`
    FailedEntryCount *int64 `json:"FailedEntryCount,omitempty"`
    
}

