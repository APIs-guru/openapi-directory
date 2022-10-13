package shared

import (
	"time"
)

type StepExecutionStatusDetail struct {
	CreationDateTime      time.Time              `json:"CreationDateTime"`
	EndDateTime           *time.Time             `json:"EndDateTime"`
	LastStateChangeReason *string                `json:"LastStateChangeReason"`
	StartDateTime         *time.Time             `json:"StartDateTime"`
	State                 StepExecutionStateEnum `json:"State"`
}
