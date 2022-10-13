package shared

import (
	"time"
)

type BlueprintRun struct {
	BlueprintName        *string                `json:"BlueprintName"`
	CompletedOn          *time.Time             `json:"CompletedOn"`
	ErrorMessage         *string                `json:"ErrorMessage"`
	Parameters           *string                `json:"Parameters"`
	RoleArn              *string                `json:"RoleArn"`
	RollbackErrorMessage *string                `json:"RollbackErrorMessage"`
	RunID                *string                `json:"RunId"`
	StartedOn            *time.Time             `json:"StartedOn"`
	State                *BlueprintRunStateEnum `json:"State"`
	WorkflowName         *string                `json:"WorkflowName"`
}
