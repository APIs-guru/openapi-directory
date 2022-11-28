package shared

import (
	"time"
)

// NotebookExecutionSummary
// Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution.
type NotebookExecutionSummary struct {
	EditorID              *string                      `json:"EditorId,omitempty"`
	EndTime               *time.Time                   `json:"EndTime,omitempty"`
	NotebookExecutionID   *string                      `json:"NotebookExecutionId,omitempty"`
	NotebookExecutionName *string                      `json:"NotebookExecutionName,omitempty"`
	StartTime             *time.Time                   `json:"StartTime,omitempty"`
	Status                *NotebookExecutionStatusEnum `json:"Status,omitempty"`
}
