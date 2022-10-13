package shared

import (
	"time"
)

type TimestampRange struct {
	BeginDate *time.Time `json:"beginDate"`
	EndDate   *time.Time `json:"endDate"`
}
