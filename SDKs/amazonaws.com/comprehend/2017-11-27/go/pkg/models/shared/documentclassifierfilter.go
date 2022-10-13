package shared

import (
	"time"
)

type DocumentClassifierFilter struct {
	Status           *ModelStatusEnum `json:"Status"`
	SubmitTimeAfter  *time.Time       `json:"SubmitTimeAfter"`
	SubmitTimeBefore *time.Time       `json:"SubmitTimeBefore"`
}
