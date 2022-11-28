package shared

// TimeoutConfig
// Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
type TimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes,omitempty"`
}
