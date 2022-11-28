package shared

import (
	"time"
)

// StepExecutionStatusDetail
// The execution state of a step.
type StepExecutionStatusDetail struct {
	CreationDateTime      time.Time              `json:"CreationDateTime"`
	EndDateTime           *time.Time             `json:"EndDateTime,omitempty"`
	LastStateChangeReason *string                `json:"LastStateChangeReason,omitempty"`
	StartDateTime         *time.Time             `json:"StartDateTime,omitempty"`
	State                 StepExecutionStateEnum `json:"State"`
}
