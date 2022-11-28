package shared

import (
	"time"
)

// ActivatePipelineInput
// Contains the parameters for ActivatePipeline.
type ActivatePipelineInput struct {
	ParameterValues []ParameterValue `json:"parameterValues,omitempty"`
	PipelineID      string           `json:"pipelineId"`
	StartTimestamp  *time.Time       `json:"startTimestamp,omitempty"`
}
