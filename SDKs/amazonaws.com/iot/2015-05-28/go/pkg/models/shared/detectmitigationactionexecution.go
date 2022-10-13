package shared

import (
	"time"
)

type DetectMitigationActionExecution struct {
	ActionName         *string                                    `json:"actionName"`
	ErrorCode          *string                                    `json:"errorCode"`
	ExecutionEndDate   *time.Time                                 `json:"executionEndDate"`
	ExecutionStartDate *time.Time                                 `json:"executionStartDate"`
	Message            *string                                    `json:"message"`
	Status             *DetectMitigationActionExecutionStatusEnum `json:"status"`
	TaskID             *string                                    `json:"taskId"`
	ThingName          *string                                    `json:"thingName"`
	ViolationID        *string                                    `json:"violationId"`
}
