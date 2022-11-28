package shared

import (
	"time"
)

// ComprehendMedicalAsyncJobFilter
// Provides information for filtering a list of detection jobs.
type ComprehendMedicalAsyncJobFilter struct {
	JobName          *string        `json:"JobName,omitempty"`
	JobStatus        *JobStatusEnum `json:"JobStatus,omitempty"`
	SubmitTimeAfter  *time.Time     `json:"SubmitTimeAfter,omitempty"`
	SubmitTimeBefore *time.Time     `json:"SubmitTimeBefore,omitempty"`
}
