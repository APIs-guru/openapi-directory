package shared

import (
	"time"
)

type EntityRecognizerFilter struct {
	Status           *ModelStatusEnum `json:"Status"`
	SubmitTimeAfter  *time.Time       `json:"SubmitTimeAfter"`
	SubmitTimeBefore *time.Time       `json:"SubmitTimeBefore"`
}
