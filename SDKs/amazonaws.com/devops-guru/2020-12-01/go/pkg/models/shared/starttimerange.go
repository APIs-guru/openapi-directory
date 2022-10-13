package shared

import (
	"time"
)

type StartTimeRange struct {
	FromTime *time.Time `json:"FromTime"`
	ToTime   *time.Time `json:"ToTime"`
}
