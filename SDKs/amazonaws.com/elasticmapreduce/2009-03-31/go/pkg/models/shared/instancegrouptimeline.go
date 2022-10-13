package shared

import (
	"time"
)

type InstanceGroupTimeline struct {
	CreationDateTime *time.Time `json:"CreationDateTime"`
	EndDateTime      *time.Time `json:"EndDateTime"`
	ReadyDateTime    *time.Time `json:"ReadyDateTime"`
}
