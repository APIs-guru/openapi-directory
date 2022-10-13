package shared

import (
	"time"
)

type EndTimeRange struct {
	FromTime *time.Time `json:"FromTime"`
	ToTime   *time.Time `json:"ToTime"`
}
