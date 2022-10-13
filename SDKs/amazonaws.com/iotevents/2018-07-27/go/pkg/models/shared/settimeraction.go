package shared

type SetTimerAction struct {
	DurationExpression *string `json:"durationExpression"`
	Seconds            *int64  `json:"seconds"`
	TimerName          string  `json:"timerName"`
}
