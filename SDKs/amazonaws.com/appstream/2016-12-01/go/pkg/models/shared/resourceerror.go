package shared

import (
	"time"
)

type ResourceError struct {
	ErrorCode      *FleetErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage   *string             `json:"ErrorMessage"`
	ErrorTimestamp *time.Time          `json:"ErrorTimestamp"`
}
