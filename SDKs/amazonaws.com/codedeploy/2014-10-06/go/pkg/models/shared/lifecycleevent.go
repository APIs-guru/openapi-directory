package shared

import (
	"time"
)

// LifecycleEvent
// Information about a deployment lifecycle event.
type LifecycleEvent struct {
	Diagnostics        *Diagnostics              `json:"diagnostics,omitempty"`
	EndTime            *time.Time                `json:"endTime,omitempty"`
	LifecycleEventName *string                   `json:"lifecycleEventName,omitempty"`
	StartTime          *time.Time                `json:"startTime,omitempty"`
	Status             *LifecycleEventStatusEnum `json:"status,omitempty"`
}
