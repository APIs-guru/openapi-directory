package shared

import (
	"time"
)

// InstanceGroupTimeline
// The timeline of the instance group lifecycle.
type InstanceGroupTimeline struct {
	CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
	EndDateTime      *time.Time `json:"EndDateTime,omitempty"`
	ReadyDateTime    *time.Time `json:"ReadyDateTime,omitempty"`
}
