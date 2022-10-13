package shared

type RemoveTargetsResponse struct {
	FailedEntries    []RemoveTargetsResultEntry `json:"FailedEntries"`
	FailedEntryCount *int64                     `json:"FailedEntryCount"`
}
