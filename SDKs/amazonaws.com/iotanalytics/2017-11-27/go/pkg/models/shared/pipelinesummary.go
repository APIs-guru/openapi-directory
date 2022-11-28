package shared

import (
	"time"
)

// PipelineSummary
// A summary of information about a pipeline.
type PipelineSummary struct {
	CreationTime          *time.Time            `json:"creationTime,omitempty"`
	LastUpdateTime        *time.Time            `json:"lastUpdateTime,omitempty"`
	PipelineName          *string               `json:"pipelineName,omitempty"`
	ReprocessingSummaries []ReprocessingSummary `json:"reprocessingSummaries,omitempty"`
}
