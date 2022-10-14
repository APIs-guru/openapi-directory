package shared

import (
	"time"
)

type Workflow struct {
	BlueprintDetails     *BlueprintDetails `json:"BlueprintDetails,omitempty"`
	CreatedOn            *time.Time        `json:"CreatedOn,omitempty"`
	DefaultRunProperties map[string]string `json:"DefaultRunProperties,omitempty"`
	Description          *string           `json:"Description,omitempty"`
	Graph                *WorkflowGraph    `json:"Graph,omitempty"`
	LastModifiedOn       *time.Time        `json:"LastModifiedOn,omitempty"`
	LastRun              *WorkflowRun      `json:"LastRun,omitempty"`
	MaxConcurrentRuns    *int64            `json:"MaxConcurrentRuns,omitempty"`
	Name                 *string           `json:"Name,omitempty"`
}
