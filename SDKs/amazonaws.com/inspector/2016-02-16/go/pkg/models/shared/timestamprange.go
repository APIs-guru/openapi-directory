package shared

import (
	"time"
)

// TimestampRange
// This data type is used in the <a>AssessmentRunFilter</a> data type.
type TimestampRange struct {
	BeginDate *time.Time `json:"beginDate,omitempty"`
	EndDate   *time.Time `json:"endDate,omitempty"`
}
