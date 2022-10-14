package shared

import (
	"time"
)

type DetectMitigationActionExecution struct {
	ActionName         *string                                    `json:"actionName,omitempty"`
	ErrorCode          *string                                    `json:"errorCode,omitempty"`
	ExecutionEndDate   *time.Time                                 `json:"executionEndDate,omitempty"`
	ExecutionStartDate *time.Time                                 `json:"executionStartDate,omitempty"`
	Message            *string                                    `json:"message,omitempty"`
	Status             *DetectMitigationActionExecutionStatusEnum `json:"status,omitempty"`
	TaskID             *string                                    `json:"taskId,omitempty"`
	ThingName          *string                                    `json:"thingName,omitempty"`
	ViolationID        *string                                    `json:"violationId,omitempty"`
}
