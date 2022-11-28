package shared

import (
	"time"
)

// ReprocessingSummary
// Information about pipeline reprocessing.
type ReprocessingSummary struct {
	CreationTime *time.Time              `json:"creationTime,omitempty"`
	ID           *string                 `json:"id,omitempty"`
	Status       *ReprocessingStatusEnum `json:"status,omitempty"`
}
