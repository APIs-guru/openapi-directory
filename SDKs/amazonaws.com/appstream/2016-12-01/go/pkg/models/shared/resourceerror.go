package shared

import (
	"time"
)

// ResourceError
// Describes a resource error.
type ResourceError struct {
	ErrorCode      *FleetErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage   *string             `json:"ErrorMessage,omitempty"`
	ErrorTimestamp *time.Time          `json:"ErrorTimestamp,omitempty"`
}
