package shared

import (
	"time"
)

// ScheduledInstance
// Describes a Scheduled Instance.
type ScheduledInstance struct {
	AvailabilityZone            *string
	CreateDate                  *time.Time
	HourlyPrice                 *string
	InstanceCount               *int64
	InstanceType                *string
	NetworkPlatform             *string
	NextSlotStartTime           *time.Time
	Platform                    *string
	PreviousSlotEndTime         *time.Time
	Recurrence                  *ScheduledInstanceRecurrence
	ScheduledInstanceID         *string
	SlotDurationInHours         *int64
	TermEndDate                 *time.Time
	TermStartDate               *time.Time
	TotalScheduledInstanceHours *int64
}
