package shared

import (
"time")

type ViolationEventOccurrenceRange struct {
    EndTime time.Time `json:"endTime"`
    StartTime time.Time `json:"startTime"`
    
}

