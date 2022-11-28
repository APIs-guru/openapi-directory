package shared

import (
	"time"
)

// KeyPhrasesDetectionJobFilter
// Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
type KeyPhrasesDetectionJobFilter struct {
	JobName          *string        `json:"JobName,omitempty"`
	JobStatus        *JobStatusEnum `json:"JobStatus,omitempty"`
	SubmitTimeAfter  *time.Time     `json:"SubmitTimeAfter,omitempty"`
	SubmitTimeBefore *time.Time     `json:"SubmitTimeBefore,omitempty"`
}
