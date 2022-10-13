package shared

import (
	"time"
)

type PipelineExecutionSummary struct {
	LastUpdateTime      *time.Time                   `json:"lastUpdateTime"`
	PipelineExecutionID *string                      `json:"pipelineExecutionId"`
	SourceRevisions     []SourceRevision             `json:"sourceRevisions"`
	StartTime           *time.Time                   `json:"startTime"`
	Status              *PipelineExecutionStatusEnum `json:"status"`
	StopTrigger         *StopExecutionTrigger        `json:"stopTrigger"`
	Trigger             *ExecutionTrigger            `json:"trigger"`
}
