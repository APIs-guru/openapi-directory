package shared

import (
	"time"
)

type PiiEntitiesDetectionJobFilter struct {
	JobName          *string        `json:"JobName"`
	JobStatus        *JobStatusEnum `json:"JobStatus"`
	SubmitTimeAfter  *time.Time     `json:"SubmitTimeAfter"`
	SubmitTimeBefore *time.Time     `json:"SubmitTimeBefore"`
}
