package shared

type PutTargetsResponse struct {
	FailedEntries    []PutTargetsResultEntry `json:"FailedEntries"`
	FailedEntryCount *int64                  `json:"FailedEntryCount"`
}
