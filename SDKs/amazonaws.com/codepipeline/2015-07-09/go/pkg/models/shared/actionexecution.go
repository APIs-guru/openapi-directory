package shared

import (
	"time"
)

type ActionExecution struct {
	ActionExecutionID    *string                    `json:"actionExecutionId"`
	ErrorDetails         *ErrorDetails              `json:"errorDetails"`
	ExternalExecutionID  *string                    `json:"externalExecutionId"`
	ExternalExecutionURL *string                    `json:"externalExecutionUrl"`
	LastStatusChange     *time.Time                 `json:"lastStatusChange"`
	LastUpdatedBy        *string                    `json:"lastUpdatedBy"`
	PercentComplete      *int64                     `json:"percentComplete"`
	Status               *ActionExecutionStatusEnum `json:"status"`
	Summary              *string                    `json:"summary"`
	Token                *string                    `json:"token"`
}
