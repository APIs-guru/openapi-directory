package shared

import (
	"time"
)

type Pipeline struct {
	Activities            []PipelineActivity    `json:"activities,omitempty"`
	Arn                   *string               `json:"arn,omitempty"`
	CreationTime          *time.Time            `json:"creationTime,omitempty"`
	LastUpdateTime        *time.Time            `json:"lastUpdateTime,omitempty"`
	Name                  *string               `json:"name,omitempty"`
	ReprocessingSummaries []ReprocessingSummary `json:"reprocessingSummaries,omitempty"`
}
