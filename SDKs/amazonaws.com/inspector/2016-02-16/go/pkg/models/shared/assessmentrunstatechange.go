package shared

import (
"time")

type AssessmentRunStateChange struct {
    State AssessmentRunStateEnum `json:"state"`
    StateChangedAt time.Time `json:"stateChangedAt"`
    
}

