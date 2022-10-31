package shared

type SetTimerAction struct {
	DurationExpression *string `json:"durationExpression,omitempty"`
	Seconds            *int64  `json:"seconds,omitempty"`
	TimerName          string  `json:"timerName"`
}
