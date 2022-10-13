package shared

type Counters struct {
	Errored *int64 `json:"errored"`
	Failed  *int64 `json:"failed"`
	Passed  *int64 `json:"passed"`
	Skipped *int64 `json:"skipped"`
	Stopped *int64 `json:"stopped"`
	Total   *int64 `json:"total"`
	Warned  *int64 `json:"warned"`
}
