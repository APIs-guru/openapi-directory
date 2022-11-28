package shared

// AttemptDetail
// An object representing a job attempt.
type AttemptDetail struct {
	Container    *AttemptContainerDetail `json:"container,omitempty"`
	StartedAt    *int64                  `json:"startedAt,omitempty"`
	StatusReason *string                 `json:"statusReason,omitempty"`
	StoppedAt    *int64                  `json:"stoppedAt,omitempty"`
}
