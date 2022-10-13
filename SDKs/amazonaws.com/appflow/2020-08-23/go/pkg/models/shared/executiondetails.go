package shared

import (
	"time"
)

type ExecutionDetails struct {
	MostRecentExecutionMessage *string              `json:"mostRecentExecutionMessage"`
	MostRecentExecutionStatus  *ExecutionStatusEnum `json:"mostRecentExecutionStatus"`
	MostRecentExecutionTime    *time.Time           `json:"mostRecentExecutionTime"`
}
