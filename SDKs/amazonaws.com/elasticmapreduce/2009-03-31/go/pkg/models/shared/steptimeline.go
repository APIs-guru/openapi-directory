package shared

import (
	"time"
)

type StepTimeline struct {
	CreationDateTime *time.Time `json:"CreationDateTime"`
	EndDateTime      *time.Time `json:"EndDateTime"`
	StartDateTime    *time.Time `json:"StartDateTime"`
}
