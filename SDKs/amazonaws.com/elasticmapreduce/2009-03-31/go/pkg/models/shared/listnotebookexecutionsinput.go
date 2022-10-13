package shared

import (
	"time"
)

type ListNotebookExecutionsInput struct {
	EditorID *string                      `json:"EditorId"`
	From     *time.Time                   `json:"From"`
	Marker   *string                      `json:"Marker"`
	Status   *NotebookExecutionStatusEnum `json:"Status"`
	To       *time.Time                   `json:"To"`
}
