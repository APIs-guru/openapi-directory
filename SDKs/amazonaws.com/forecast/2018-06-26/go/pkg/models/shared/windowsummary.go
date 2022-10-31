package shared

import (
"time")

type WindowSummary struct {
    EvaluationType *EvaluationTypeEnum `json:"EvaluationType,omitempty"`
    ItemCount *int64 `json:"ItemCount,omitempty"`
    Metrics *Metrics `json:"Metrics,omitempty"`
    TestWindowEnd *time.Time `json:"TestWindowEnd,omitempty"`
    TestWindowStart *time.Time `json:"TestWindowStart,omitempty"`
    
}

