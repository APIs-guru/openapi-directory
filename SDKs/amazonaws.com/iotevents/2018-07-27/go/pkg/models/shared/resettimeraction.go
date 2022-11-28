package shared

// ResetTimerAction
// Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
type ResetTimerAction struct {
	TimerName string `json:"timerName"`
}
