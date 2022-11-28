package shared

// SuggestStatus
// Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
type SuggestStatus struct {
	Rid    *string `json:"rid,omitempty"`
	Timems *int64  `json:"timems,omitempty"`
}
