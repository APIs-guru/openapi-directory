package shared

type TrialMinutes struct {
	Remaining *float64 `json:"remaining,omitempty"`
	Total     *float64 `json:"total,omitempty"`
}
