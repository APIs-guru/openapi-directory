package shared

import (
	"time"
)

type StepExecutionStatusDetail struct {
	CreationDateTime      time.Time              `json:"CreationDateTime"`
	EndDateTime           *time.Time             `json:"EndDateTime,omitempty"`
	LastStateChangeReason *string                `json:"LastStateChangeReason,omitempty"`
	StartDateTime         *time.Time             `json:"StartDateTime,omitempty"`
	State                 StepExecutionStateEnum `json:"State"`
}
