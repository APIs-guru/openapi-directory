package shared

import (
	"time"
)

type TimeRange struct {
	End   *time.Time `json:"end"`
	Start *time.Time `json:"start"`
}
