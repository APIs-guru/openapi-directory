package shared

type PlayerLatencyPolicy struct {
	MaximumIndividualPlayerLatencyMilliseconds *int64 `json:"MaximumIndividualPlayerLatencyMilliseconds,omitempty"`
	PolicyDurationSeconds                      *int64 `json:"PolicyDurationSeconds,omitempty"`
}
