package shared

import (
	"time"
)

type PipelineSummary struct {
	CreationTime          *time.Time            `json:"creationTime"`
	LastUpdateTime        *time.Time            `json:"lastUpdateTime"`
	PipelineName          *string               `json:"pipelineName"`
	ReprocessingSummaries []ReprocessingSummary `json:"reprocessingSummaries"`
}
