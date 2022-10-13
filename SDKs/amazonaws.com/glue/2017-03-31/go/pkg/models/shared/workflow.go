package shared

import (
	"time"
)

type Workflow struct {
	BlueprintDetails     *BlueprintDetails `json:"BlueprintDetails"`
	CreatedOn            *time.Time        `json:"CreatedOn"`
	DefaultRunProperties map[string]string `json:"DefaultRunProperties"`
	Description          *string           `json:"Description"`
	Graph                *WorkflowGraph    `json:"Graph"`
	LastModifiedOn       *time.Time        `json:"LastModifiedOn"`
	LastRun              *WorkflowRun      `json:"LastRun"`
	MaxConcurrentRuns    *int64            `json:"MaxConcurrentRuns"`
	Name                 *string           `json:"Name"`
}
