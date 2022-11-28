package shared

import (
	"time"
)

// EventsDetectionJobFilter
// Provides information for filtering a list of event detection jobs.
type EventsDetectionJobFilter struct {
	JobName          *string        `json:"JobName,omitempty"`
	JobStatus        *JobStatusEnum `json:"JobStatus,omitempty"`
	SubmitTimeAfter  *time.Time     `json:"SubmitTimeAfter,omitempty"`
	SubmitTimeBefore *time.Time     `json:"SubmitTimeBefore,omitempty"`
}
