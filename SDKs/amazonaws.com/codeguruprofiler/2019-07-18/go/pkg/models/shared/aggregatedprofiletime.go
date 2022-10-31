package shared

import (
"time")

type AggregatedProfileTime struct {
    Period *AggregationPeriodEnum `json:"period,omitempty"`
    Start *time.Time `json:"start,omitempty"`
    
}

