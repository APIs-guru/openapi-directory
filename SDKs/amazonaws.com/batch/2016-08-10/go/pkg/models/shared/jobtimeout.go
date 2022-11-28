package shared

// JobTimeout
// An object representing a job timeout configuration.
type JobTimeout struct {
	AttemptDurationSeconds *int64 `json:"attemptDurationSeconds,omitempty"`
}
