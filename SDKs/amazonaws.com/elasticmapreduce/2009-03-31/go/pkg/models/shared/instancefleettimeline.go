package shared

import (
"time")

type InstanceFleetTimeline struct {
    CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
    EndDateTime *time.Time `json:"EndDateTime,omitempty"`
    ReadyDateTime *time.Time `json:"ReadyDateTime,omitempty"`
    
}

