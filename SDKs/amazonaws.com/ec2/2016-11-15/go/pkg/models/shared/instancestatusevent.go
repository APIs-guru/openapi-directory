package shared

import (
	"time"
)

// InstanceStatusEvent
// Describes a scheduled event for an instance.
type InstanceStatusEvent struct {
	Code              *EventCodeEnum
	Description       *string
	InstanceEventID   *string
	NotAfter          *time.Time
	NotBefore         *time.Time
	NotBeforeDeadline *time.Time
}
