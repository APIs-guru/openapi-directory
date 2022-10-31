package shared

import (
"time")

type StepTimeline struct {
    CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
    EndDateTime *time.Time `json:"EndDateTime,omitempty"`
    StartDateTime *time.Time `json:"StartDateTime,omitempty"`
    
}

