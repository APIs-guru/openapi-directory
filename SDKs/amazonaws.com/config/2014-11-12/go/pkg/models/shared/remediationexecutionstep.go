package shared

import (
	"time"
)

type RemediationExecutionStep struct {
	ErrorMessage *string                            `json:"ErrorMessage,omitempty"`
	Name         *string                            `json:"Name,omitempty"`
	StartTime    *time.Time                         `json:"StartTime,omitempty"`
	State        *RemediationExecutionStepStateEnum `json:"State,omitempty"`
	StopTime     *time.Time                         `json:"StopTime,omitempty"`
}
