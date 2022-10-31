package shared



type PutEventsResponse struct {
    Entries []PutEventsResultEntry `json:"Entries,omitempty"`
    FailedEntryCount *int64 `json:"FailedEntryCount,omitempty"`
    
}

