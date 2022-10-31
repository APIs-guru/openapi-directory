package shared

import (
"time")

type EventTimeRange struct {
    FromTime time.Time `json:"FromTime"`
    ToTime time.Time `json:"ToTime"`
    
}

