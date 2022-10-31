package shared

import (
"time")

type ListNotebookExecutionsInput struct {
    EditorID *string `json:"EditorId,omitempty"`
    From *time.Time `json:"From,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    Status *NotebookExecutionStatusEnum `json:"Status,omitempty"`
    To *time.Time `json:"To,omitempty"`
    
}

