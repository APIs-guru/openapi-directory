package shared

import (
	"time"
)

// PiiEntitiesDetectionJobFilter
// Provides information for filtering a list of PII entity detection jobs.
type PiiEntitiesDetectionJobFilter struct {
	JobName          *string        `json:"JobName,omitempty"`
	JobStatus        *JobStatusEnum `json:"JobStatus,omitempty"`
	SubmitTimeAfter  *time.Time     `json:"SubmitTimeAfter,omitempty"`
	SubmitTimeBefore *time.Time     `json:"SubmitTimeBefore,omitempty"`
}
