package shared

import (
"time")

type AnomalyTimeRange struct {
    EndTime *time.Time `json:"EndTime,omitempty"`
    StartTime time.Time `json:"StartTime"`
    
}

