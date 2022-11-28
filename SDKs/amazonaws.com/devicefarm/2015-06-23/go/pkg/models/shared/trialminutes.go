package shared

// TrialMinutes
// Represents information about free trial device minutes for an AWS account.
type TrialMinutes struct {
	Remaining *float64 `json:"remaining,omitempty"`
	Total     *float64 `json:"total,omitempty"`
}
