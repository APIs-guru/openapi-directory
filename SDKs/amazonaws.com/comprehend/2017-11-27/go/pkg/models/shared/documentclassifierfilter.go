package shared

import (
	"time"
)

// DocumentClassifierFilter
// Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation.
type DocumentClassifierFilter struct {
	Status           *ModelStatusEnum `json:"Status,omitempty"`
	SubmitTimeAfter  *time.Time       `json:"SubmitTimeAfter,omitempty"`
	SubmitTimeBefore *time.Time       `json:"SubmitTimeBefore,omitempty"`
}
