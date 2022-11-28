package shared

import (
	"time"
)

// NotebookExecution
// A notebook execution. An execution is a specific instance that an EMR Notebook is run using the <code>StartNotebookExecution</code> action.
type NotebookExecution struct {
	Arn                             *string                      `json:"Arn,omitempty"`
	EditorID                        *string                      `json:"EditorId,omitempty"`
	EndTime                         *time.Time                   `json:"EndTime,omitempty"`
	ExecutionEngine                 *ExecutionEngineConfig       `json:"ExecutionEngine,omitempty"`
	LastStateChangeReason           *string                      `json:"LastStateChangeReason,omitempty"`
	NotebookExecutionID             *string                      `json:"NotebookExecutionId,omitempty"`
	NotebookExecutionName           *string                      `json:"NotebookExecutionName,omitempty"`
	NotebookInstanceSecurityGroupID *string                      `json:"NotebookInstanceSecurityGroupId,omitempty"`
	NotebookParams                  *string                      `json:"NotebookParams,omitempty"`
	OutputNotebookURI               *string                      `json:"OutputNotebookURI,omitempty"`
	StartTime                       *time.Time                   `json:"StartTime,omitempty"`
	Status                          *NotebookExecutionStatusEnum `json:"Status,omitempty"`
	Tags                            []Tag                        `json:"Tags,omitempty"`
}
