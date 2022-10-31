package shared

import (
	"time"
)

type ActivatePipelineInput struct {
	ParameterValues []ParameterValue `json:"parameterValues,omitempty"`
	PipelineID      string           `json:"pipelineId"`
	StartTimestamp  *time.Time       `json:"startTimestamp,omitempty"`
}
