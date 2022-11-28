package shared

import (
	"time"
)

// ProfileTime
//
//	Contains the start time of a profile.
type ProfileTime struct {
	Start *time.Time `json:"start,omitempty"`
}
