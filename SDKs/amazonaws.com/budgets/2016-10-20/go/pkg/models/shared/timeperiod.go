package shared

import (
	"time"
)

type TimePeriod struct {
	End   *time.Time `json:"End"`
	Start *time.Time `json:"Start"`
}
