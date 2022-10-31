package shared

import (
	"time"
)

type WorkflowRun struct {
	CompletedOn                 *time.Time                   `json:"CompletedOn,omitempty"`
	ErrorMessage                *string                      `json:"ErrorMessage,omitempty"`
	Graph                       *WorkflowGraph               `json:"Graph,omitempty"`
	Name                        *string                      `json:"Name,omitempty"`
	PreviousRunID               *string                      `json:"PreviousRunId,omitempty"`
	StartedOn                   *time.Time                   `json:"StartedOn,omitempty"`
	StartingEventBatchCondition *StartingEventBatchCondition `json:"StartingEventBatchCondition,omitempty"`
	Statistics                  *WorkflowRunStatistics       `json:"Statistics,omitempty"`
	Status                      *WorkflowRunStatusEnum       `json:"Status,omitempty"`
	WorkflowRunID               *string                      `json:"WorkflowRunId,omitempty"`
	WorkflowRunProperties       map[string]string            `json:"WorkflowRunProperties,omitempty"`
}
