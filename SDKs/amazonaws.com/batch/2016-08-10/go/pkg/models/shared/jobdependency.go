package shared

type JobDependency struct {
	JobID *string                 `json:"jobId"`
	Type  *ArrayJobDependencyEnum `json:"type"`
}
