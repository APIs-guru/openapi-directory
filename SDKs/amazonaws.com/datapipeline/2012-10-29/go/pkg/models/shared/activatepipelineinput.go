package shared

import (
	"time"
)

type ActivatePipelineInput struct {
	ParameterValues []ParameterValue `json:"parameterValues"`
	PipelineID      string           `json:"pipelineId"`
	StartTimestamp  *time.Time       `json:"startTimestamp"`
}
