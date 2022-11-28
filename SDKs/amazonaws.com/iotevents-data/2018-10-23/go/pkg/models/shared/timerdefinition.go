package shared

// TimerDefinition
// The new setting of a timer.
type TimerDefinition struct {
	Name    string `json:"name"`
	Seconds int64  `json:"seconds"`
}
