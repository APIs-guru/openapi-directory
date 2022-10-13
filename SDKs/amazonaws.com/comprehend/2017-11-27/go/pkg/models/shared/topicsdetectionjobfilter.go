package shared

import (
	"time"
)

type TopicsDetectionJobFilter struct {
	JobName          *string        `json:"JobName"`
	JobStatus        *JobStatusEnum `json:"JobStatus"`
	SubmitTimeAfter  *time.Time     `json:"SubmitTimeAfter"`
	SubmitTimeBefore *time.Time     `json:"SubmitTimeBefore"`
}
