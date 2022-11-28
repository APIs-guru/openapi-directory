package shared

import (
	"time"
)

// SpotInstanceStatus
// Describes the status of a Spot Instance request.
type SpotInstanceStatus struct {
	Code       *string
	Message    *string
	UpdateTime *time.Time
}
