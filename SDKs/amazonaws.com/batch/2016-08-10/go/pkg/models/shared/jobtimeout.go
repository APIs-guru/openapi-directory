package shared

type JobTimeout struct {
	AttemptDurationSeconds *int64 `json:"attemptDurationSeconds"`
}
