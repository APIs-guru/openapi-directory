package shared

import (
	"time"
)

type JobFlowExecutionStatusDetail struct {
	CreationDateTime      time.Time                 `json:"CreationDateTime"`
	EndDateTime           *time.Time                `json:"EndDateTime"`
	LastStateChangeReason *string                   `json:"LastStateChangeReason"`
	ReadyDateTime         *time.Time                `json:"ReadyDateTime"`
	StartDateTime         *time.Time                `json:"StartDateTime"`
	State                 JobFlowExecutionStateEnum `json:"State"`
}
