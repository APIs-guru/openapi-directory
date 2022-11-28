package shared

import (
	"time"
)

// AssessmentRunStateChange
// Used as one of the elements of the <a>AssessmentRun</a> data type.
type AssessmentRunStateChange struct {
	State          AssessmentRunStateEnum `json:"state"`
	StateChangedAt time.Time              `json:"stateChangedAt"`
}
