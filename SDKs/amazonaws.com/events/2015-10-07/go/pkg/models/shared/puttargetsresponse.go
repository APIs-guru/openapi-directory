package shared

type PutTargetsResponse struct {
	FailedEntries    []PutTargetsResultEntry `json:"FailedEntries,omitempty"`
	FailedEntryCount *int64                  `json:"FailedEntryCount,omitempty"`
}
