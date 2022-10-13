package shared

import (
	"time"
)

type ActionExecutionDetail struct {
	ActionExecutionID   *string                    `json:"actionExecutionId"`
	ActionName          *string                    `json:"actionName"`
	Input               *ActionExecutionInput      `json:"input"`
	LastUpdateTime      *time.Time                 `json:"lastUpdateTime"`
	Output              *ActionExecutionOutput     `json:"output"`
	PipelineExecutionID *string                    `json:"pipelineExecutionId"`
	PipelineVersion     *int64                     `json:"pipelineVersion"`
	StageName           *string                    `json:"stageName"`
	StartTime           *time.Time                 `json:"startTime"`
	Status              *ActionExecutionStatusEnum `json:"status"`
}
