package shared

// ExecutionProperty
// An execution property of a job.
type ExecutionProperty struct {
	MaxConcurrentRuns *int64 `json:"MaxConcurrentRuns,omitempty"`
}
