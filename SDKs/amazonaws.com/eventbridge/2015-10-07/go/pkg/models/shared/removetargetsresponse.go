package shared



type RemoveTargetsResponse struct {
    FailedEntries []RemoveTargetsResultEntry `json:"FailedEntries,omitempty"`
    FailedEntryCount *int64 `json:"FailedEntryCount,omitempty"`
    
}

