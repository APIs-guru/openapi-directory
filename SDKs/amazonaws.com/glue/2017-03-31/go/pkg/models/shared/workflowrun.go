package shared

import (
	"time"
)

type WorkflowRun struct {
	CompletedOn                 *time.Time                   `json:"CompletedOn"`
	ErrorMessage                *string                      `json:"ErrorMessage"`
	Graph                       *WorkflowGraph               `json:"Graph"`
	Name                        *string                      `json:"Name"`
	PreviousRunID               *string                      `json:"PreviousRunId"`
	StartedOn                   *time.Time                   `json:"StartedOn"`
	StartingEventBatchCondition *StartingEventBatchCondition `json:"StartingEventBatchCondition"`
	Statistics                  *WorkflowRunStatistics       `json:"Statistics"`
	Status                      *WorkflowRunStatusEnum       `json:"Status"`
	WorkflowRunID               *string                      `json:"WorkflowRunId"`
	WorkflowRunProperties       map[string]string            `json:"WorkflowRunProperties"`
}
