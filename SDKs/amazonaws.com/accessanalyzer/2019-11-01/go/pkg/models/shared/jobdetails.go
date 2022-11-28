package shared

import (
	"time"
)

// JobDetails
// Contains details about the policy generation request.
type JobDetails struct {
	CompletedOn *time.Time    `json:"completedOn,omitempty"`
	JobError    *JobError     `json:"jobError,omitempty"`
	JobID       string        `json:"jobId"`
	StartedOn   time.Time     `json:"startedOn"`
	Status      JobStatusEnum `json:"status"`
}
