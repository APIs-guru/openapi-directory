package shared

import (
	"time"
)

// BlueprintRun
// The details of a blueprint run.
type BlueprintRun struct {
	BlueprintName        *string                `json:"BlueprintName,omitempty"`
	CompletedOn          *time.Time             `json:"CompletedOn,omitempty"`
	ErrorMessage         *string                `json:"ErrorMessage,omitempty"`
	Parameters           *string                `json:"Parameters,omitempty"`
	RoleArn              *string                `json:"RoleArn,omitempty"`
	RollbackErrorMessage *string                `json:"RollbackErrorMessage,omitempty"`
	RunID                *string                `json:"RunId,omitempty"`
	StartedOn            *time.Time             `json:"StartedOn,omitempty"`
	State                *BlueprintRunStateEnum `json:"State,omitempty"`
	WorkflowName         *string                `json:"WorkflowName,omitempty"`
}
