package shared

import (
	"time"
)

type Pipeline struct {
	Activities            []PipelineActivity    `json:"activities"`
	Arn                   *string               `json:"arn"`
	CreationTime          *time.Time            `json:"creationTime"`
	LastUpdateTime        *time.Time            `json:"lastUpdateTime"`
	Name                  *string               `json:"name"`
	ReprocessingSummaries []ReprocessingSummary `json:"reprocessingSummaries"`
}
