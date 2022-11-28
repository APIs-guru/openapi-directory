package shared

import (
	"time"
)

// EventDescription
// Describes an event.
type EventDescription struct {
	ApplicationName *string
	EnvironmentName *string
	EventDate       *time.Time
	Message         *string
	PlatformArn     *string
	RequestID       *string
	Severity        *EventSeverityEnum
	TemplateName    *string
	VersionLabel    *string
}
