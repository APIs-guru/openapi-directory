package shared

import (
	"time"
)

// VolumeStatusEvent
// Describes a volume status event.
type VolumeStatusEvent struct {
	Description *string
	EventID     *string
	EventType   *string
	InstanceID  *string
	NotAfter    *time.Time
	NotBefore   *time.Time
}
