package shared

import (
	"time"
)

// Job
// Representation of a job returned by the ListJobs operation.
type Job struct {
	CreationDate *time.Time
	IsCanceled   *bool
	JobID        *string
	JobType      *JobTypeEnum
}
