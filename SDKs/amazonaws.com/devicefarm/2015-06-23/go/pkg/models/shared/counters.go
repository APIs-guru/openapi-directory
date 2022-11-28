package shared

// Counters
// Represents entity counters.
type Counters struct {
	Errored *int64 `json:"errored,omitempty"`
	Failed  *int64 `json:"failed,omitempty"`
	Passed  *int64 `json:"passed,omitempty"`
	Skipped *int64 `json:"skipped,omitempty"`
	Stopped *int64 `json:"stopped,omitempty"`
	Total   *int64 `json:"total,omitempty"`
	Warned  *int64 `json:"warned,omitempty"`
}
