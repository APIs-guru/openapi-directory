package shared

import (
	"time"
)

// TimeRange
// Information about a time range.
type TimeRange struct {
	End   *time.Time `json:"end,omitempty"`
	Start *time.Time `json:"start,omitempty"`
}
