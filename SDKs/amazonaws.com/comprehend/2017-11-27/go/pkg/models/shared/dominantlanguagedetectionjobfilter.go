package shared

import (
"time")

type DominantLanguageDetectionJobFilter struct {
    JobName *string `json:"JobName,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    SubmitTimeAfter *time.Time `json:"SubmitTimeAfter,omitempty"`
    SubmitTimeBefore *time.Time `json:"SubmitTimeBefore,omitempty"`
    
}

