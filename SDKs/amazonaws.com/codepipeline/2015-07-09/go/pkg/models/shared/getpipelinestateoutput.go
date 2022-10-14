package shared

import (
	"time"
)

type GetPipelineStateOutput struct {
	Created         *time.Time   `json:"created,omitempty"`
	PipelineName    *string      `json:"pipelineName,omitempty"`
	PipelineVersion *int64       `json:"pipelineVersion,omitempty"`
	StageStates     []StageState `json:"stageStates,omitempty"`
	Updated         *time.Time   `json:"updated,omitempty"`
}
