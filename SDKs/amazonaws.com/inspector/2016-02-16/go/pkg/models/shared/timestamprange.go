package shared

import (
	"time"
)

type TimestampRange struct {
	BeginDate *time.Time `json:"beginDate,omitempty"`
	EndDate   *time.Time `json:"endDate,omitempty"`
}
