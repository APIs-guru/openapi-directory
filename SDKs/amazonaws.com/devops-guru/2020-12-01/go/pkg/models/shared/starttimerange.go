package shared

import (
	"time"
)

type StartTimeRange struct {
	FromTime *time.Time `json:"FromTime,omitempty"`
	ToTime   *time.Time `json:"ToTime,omitempty"`
}
