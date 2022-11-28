package shared

import (
	"time"
)

// DocumentClassificationJobFilter
// Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request.
type DocumentClassificationJobFilter struct {
	JobName          *string        `json:"JobName,omitempty"`
	JobStatus        *JobStatusEnum `json:"JobStatus,omitempty"`
	SubmitTimeAfter  *time.Time     `json:"SubmitTimeAfter,omitempty"`
	SubmitTimeBefore *time.Time     `json:"SubmitTimeBefore,omitempty"`
}
