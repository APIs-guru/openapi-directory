package shared

import (
"time")

type StopContinuousExportResponse struct {
    StartTime *time.Time `json:"startTime,omitempty"`
    StopTime *time.Time `json:"stopTime,omitempty"`
    
}

