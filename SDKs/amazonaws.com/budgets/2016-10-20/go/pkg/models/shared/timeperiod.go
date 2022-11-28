package shared

import (
	"time"
)

// TimePeriod
// The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
type TimePeriod struct {
	End   *time.Time `json:"End,omitempty"`
	Start *time.Time `json:"Start,omitempty"`
}
