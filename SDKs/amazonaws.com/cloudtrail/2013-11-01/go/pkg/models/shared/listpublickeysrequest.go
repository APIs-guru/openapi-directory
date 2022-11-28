package shared

import (
	"time"
)

// ListPublicKeysRequest
// Requests the public keys for a specified time range.
type ListPublicKeysRequest struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	NextToken *string    `json:"NextToken,omitempty"`
	StartTime *time.Time `json:"StartTime,omitempty"`
}
