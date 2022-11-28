package shared

import (
	"time"
)

// InstanceTimeline
// The timeline of the instance lifecycle.
type InstanceTimeline struct {
	CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
	EndDateTime      *time.Time `json:"EndDateTime,omitempty"`
	ReadyDateTime    *time.Time `json:"ReadyDateTime,omitempty"`
}
