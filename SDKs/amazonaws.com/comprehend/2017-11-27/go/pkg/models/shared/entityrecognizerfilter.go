package shared

import (
	"time"
)

type EntityRecognizerFilter struct {
	Status           *ModelStatusEnum `json:"Status,omitempty"`
	SubmitTimeAfter  *time.Time       `json:"SubmitTimeAfter,omitempty"`
	SubmitTimeBefore *time.Time       `json:"SubmitTimeBefore,omitempty"`
}
