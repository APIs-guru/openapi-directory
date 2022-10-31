package shared

import (
	"time"
)

type ExecutionDetails struct {
	MostRecentExecutionMessage *string              `json:"mostRecentExecutionMessage,omitempty"`
	MostRecentExecutionStatus  *ExecutionStatusEnum `json:"mostRecentExecutionStatus,omitempty"`
	MostRecentExecutionTime    *time.Time           `json:"mostRecentExecutionTime,omitempty"`
}
