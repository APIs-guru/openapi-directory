package shared

// JobDependency
// An object representing an Batch job dependency.
type JobDependency struct {
	JobID *string                 `json:"jobId,omitempty"`
	Type  *ArrayJobDependencyEnum `json:"type,omitempty"`
}
