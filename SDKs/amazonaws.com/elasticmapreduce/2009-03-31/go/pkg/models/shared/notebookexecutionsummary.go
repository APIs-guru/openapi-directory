package shared

import (
	"time"
)

type NotebookExecutionSummary struct {
	EditorID              *string                      `json:"EditorId"`
	EndTime               *time.Time                   `json:"EndTime"`
	NotebookExecutionID   *string                      `json:"NotebookExecutionId"`
	NotebookExecutionName *string                      `json:"NotebookExecutionName"`
	StartTime             *time.Time                   `json:"StartTime"`
	Status                *NotebookExecutionStatusEnum `json:"Status"`
}
