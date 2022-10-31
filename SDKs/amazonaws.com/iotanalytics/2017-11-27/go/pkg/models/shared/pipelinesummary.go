package shared

import (
"time")

type PipelineSummary struct {
    CreationTime *time.Time `json:"creationTime,omitempty"`
    LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
    PipelineName *string `json:"pipelineName,omitempty"`
    ReprocessingSummaries []ReprocessingSummary `json:"reprocessingSummaries,omitempty"`
    
}

