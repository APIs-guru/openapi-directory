package shared

import (
	"time"
)

// EntityRecognizerFilter
// Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the operation./&gt;
type EntityRecognizerFilter struct {
	Status           *ModelStatusEnum `json:"Status,omitempty"`
	SubmitTimeAfter  *time.Time       `json:"SubmitTimeAfter,omitempty"`
	SubmitTimeBefore *time.Time       `json:"SubmitTimeBefore,omitempty"`
}
