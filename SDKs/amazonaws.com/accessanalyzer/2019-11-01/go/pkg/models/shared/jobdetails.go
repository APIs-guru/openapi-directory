package shared

import (
	"time"
)

type JobDetails struct {
	CompletedOn *time.Time    `json:"completedOn,omitempty"`
	JobError    *JobError     `json:"jobError,omitempty"`
	JobID       string        `json:"jobId"`
	StartedOn   time.Time     `json:"startedOn"`
	Status      JobStatusEnum `json:"status"`
}
