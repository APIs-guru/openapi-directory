package shared

type JobDependency struct {
	JobID *string                 `json:"jobId,omitempty"`
	Type  *ArrayJobDependencyEnum `json:"type,omitempty"`
}
