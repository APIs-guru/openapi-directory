package shared

// SetTimerAction
// Information needed to set the timer.
type SetTimerAction struct {
	DurationExpression *string `json:"durationExpression,omitempty"`
	Seconds            *int64  `json:"seconds,omitempty"`
	TimerName          string  `json:"timerName"`
}
