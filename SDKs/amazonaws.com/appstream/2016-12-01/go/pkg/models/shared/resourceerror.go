package shared

import (
	"time"
)

type ResourceError struct {
	ErrorCode      *FleetErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage   *string             `json:"ErrorMessage,omitempty"`
	ErrorTimestamp *time.Time          `json:"ErrorTimestamp,omitempty"`
}
