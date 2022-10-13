package shared

import (
	"time"
)

type LifecycleEvent struct {
	Diagnostics        *Diagnostics              `json:"diagnostics"`
	EndTime            *time.Time                `json:"endTime"`
	LifecycleEventName *string                   `json:"lifecycleEventName"`
	StartTime          *time.Time                `json:"startTime"`
	Status             *LifecycleEventStatusEnum `json:"status"`
}
