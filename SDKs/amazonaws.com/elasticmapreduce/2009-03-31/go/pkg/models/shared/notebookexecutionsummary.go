package shared

import (
	"time"
)

type NotebookExecutionSummary struct {
	EditorID              *string                      `json:"EditorId,omitempty"`
	EndTime               *time.Time                   `json:"EndTime,omitempty"`
	NotebookExecutionID   *string                      `json:"NotebookExecutionId,omitempty"`
	NotebookExecutionName *string                      `json:"NotebookExecutionName,omitempty"`
	StartTime             *time.Time                   `json:"StartTime,omitempty"`
	Status                *NotebookExecutionStatusEnum `json:"Status,omitempty"`
}
