package shared

import (
	"time"
)

type GetPipelineStateOutput struct {
	Created         *time.Time   `json:"created"`
	PipelineName    *string      `json:"pipelineName"`
	PipelineVersion *int64       `json:"pipelineVersion"`
	StageStates     []StageState `json:"stageStates"`
	Updated         *time.Time   `json:"updated"`
}
