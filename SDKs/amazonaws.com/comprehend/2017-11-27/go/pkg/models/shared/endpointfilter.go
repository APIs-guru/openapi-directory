package shared

import (
	"time"
)

// EndpointFilter
// The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.
type EndpointFilter struct {
	CreationTimeAfter  *time.Time          `json:"CreationTimeAfter,omitempty"`
	CreationTimeBefore *time.Time          `json:"CreationTimeBefore,omitempty"`
	ModelArn           *string             `json:"ModelArn,omitempty"`
	Status             *EndpointStatusEnum `json:"Status,omitempty"`
}
