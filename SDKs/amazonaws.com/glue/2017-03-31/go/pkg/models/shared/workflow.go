package shared

import (
	"time"
)

// Workflow
// A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers.
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
