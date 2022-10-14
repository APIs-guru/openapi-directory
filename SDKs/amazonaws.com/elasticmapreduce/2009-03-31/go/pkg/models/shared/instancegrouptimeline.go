package shared

import (
	"time"
)

type InstanceGroupTimeline struct {
	CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
	EndDateTime      *time.Time `json:"EndDateTime,omitempty"`
	ReadyDateTime    *time.Time `json:"ReadyDateTime,omitempty"`
}
