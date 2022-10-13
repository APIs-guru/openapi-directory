package shared

type TrialMinutes struct {
	Remaining *float64 `json:"remaining"`
	Total     *float64 `json:"total"`
}
