package shared

import (
	"time"
)

// PipelineExecutionSummary
// Summary information about a pipeline execution.
type PipelineExecutionSummary struct {
	LastUpdateTime      *time.Time                   `json:"lastUpdateTime,omitempty"`
	PipelineExecutionID *string                      `json:"pipelineExecutionId,omitempty"`
	SourceRevisions     []SourceRevision             `json:"sourceRevisions,omitempty"`
	StartTime           *time.Time                   `json:"startTime,omitempty"`
	Status              *PipelineExecutionStatusEnum `json:"status,omitempty"`
	StopTrigger         *StopExecutionTrigger        `json:"stopTrigger,omitempty"`
	Trigger             *ExecutionTrigger            `json:"trigger,omitempty"`
}
