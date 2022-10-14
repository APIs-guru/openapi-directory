package shared

import (
	"time"
)

type TimeRange struct {
	End   *time.Time `json:"end,omitempty"`
	Start *time.Time `json:"start,omitempty"`
}
