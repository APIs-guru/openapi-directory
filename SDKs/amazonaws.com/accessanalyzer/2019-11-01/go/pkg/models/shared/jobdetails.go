package shared

import (
	"time"
)

type JobDetails struct {
	CompletedOn *time.Time    `json:"completedOn"`
	JobError    *JobError     `json:"jobError"`
	JobID       string        `json:"jobId"`
	StartedOn   time.Time     `json:"startedOn"`
	Status      JobStatusEnum `json:"status"`
}
