package shared

// SearchStatus
// Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
type SearchStatus struct {
	Rid    *string `json:"rid,omitempty"`
	Timems *int64  `json:"timems,omitempty"`
}
