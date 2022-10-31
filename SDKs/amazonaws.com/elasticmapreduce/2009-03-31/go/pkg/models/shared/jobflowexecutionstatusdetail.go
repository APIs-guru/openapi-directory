package shared

import (
	"time"
)

type JobFlowExecutionStatusDetail struct {
	CreationDateTime      time.Time                 `json:"CreationDateTime"`
	EndDateTime           *time.Time                `json:"EndDateTime,omitempty"`
	LastStateChangeReason *string                   `json:"LastStateChangeReason,omitempty"`
	ReadyDateTime         *time.Time                `json:"ReadyDateTime,omitempty"`
	StartDateTime         *time.Time                `json:"StartDateTime,omitempty"`
	State                 JobFlowExecutionStateEnum `json:"State"`
}
