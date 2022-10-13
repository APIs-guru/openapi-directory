package shared

import (
	"time"
)

type ReprocessingSummary struct {
	CreationTime *time.Time              `json:"creationTime"`
	ID           *string                 `json:"id"`
	Status       *ReprocessingStatusEnum `json:"status"`
}
