package shared

import (
	"time"
)

// ExecutionDetails
//
//	Describes the details of the flow run, including the timestamp, status, and message.
type ExecutionDetails struct {
	MostRecentExecutionMessage *string              `json:"mostRecentExecutionMessage,omitempty"`
	MostRecentExecutionStatus  *ExecutionStatusEnum `json:"mostRecentExecutionStatus,omitempty"`
	MostRecentExecutionTime    *time.Time           `json:"mostRecentExecutionTime,omitempty"`
}
