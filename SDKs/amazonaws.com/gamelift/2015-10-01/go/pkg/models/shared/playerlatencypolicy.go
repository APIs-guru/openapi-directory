package shared

type PlayerLatencyPolicy struct {
	MaximumIndividualPlayerLatencyMilliseconds *int64 `json:"MaximumIndividualPlayerLatencyMilliseconds"`
	PolicyDurationSeconds                      *int64 `json:"PolicyDurationSeconds"`
}
