package shared

import (
	"time"
)

type NotebookExecution struct {
	Arn                             *string                      `json:"Arn"`
	EditorID                        *string                      `json:"EditorId"`
	EndTime                         *time.Time                   `json:"EndTime"`
	ExecutionEngine                 *ExecutionEngineConfig       `json:"ExecutionEngine"`
	LastStateChangeReason           *string                      `json:"LastStateChangeReason"`
	NotebookExecutionID             *string                      `json:"NotebookExecutionId"`
	NotebookExecutionName           *string                      `json:"NotebookExecutionName"`
	NotebookInstanceSecurityGroupID *string                      `json:"NotebookInstanceSecurityGroupId"`
	NotebookParams                  *string                      `json:"NotebookParams"`
	OutputNotebookURI               *string                      `json:"OutputNotebookURI"`
	StartTime                       *time.Time                   `json:"StartTime"`
	Status                          *NotebookExecutionStatusEnum `json:"Status"`
	Tags                            []Tag                        `json:"Tags"`
}
