package shared

import (
"time")

type EndTimeRange struct {
    FromTime *time.Time `json:"FromTime,omitempty"`
    ToTime *time.Time `json:"ToTime,omitempty"`
    
}

