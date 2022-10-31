package shared

import (
"time")

type TimePeriod struct {
    End *time.Time `json:"End,omitempty"`
    Start *time.Time `json:"Start,omitempty"`
    
}

