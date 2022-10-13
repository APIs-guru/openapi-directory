package shared

import (
	"time"
)

type RemediationExecutionStep struct {
	ErrorMessage *string                            `json:"ErrorMessage"`
	Name         *string                            `json:"Name"`
	StartTime    *time.Time                         `json:"StartTime"`
	State        *RemediationExecutionStepStateEnum `json:"State"`
	StopTime     *time.Time                         `json:"StopTime"`
}
