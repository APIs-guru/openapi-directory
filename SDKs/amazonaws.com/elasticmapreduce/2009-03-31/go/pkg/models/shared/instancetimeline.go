package shared

import (
	"time"
)

type InstanceTimeline struct {
	CreationDateTime *time.Time `json:"CreationDateTime"`
	EndDateTime      *time.Time `json:"EndDateTime"`
	ReadyDateTime    *time.Time `json:"ReadyDateTime"`
}
