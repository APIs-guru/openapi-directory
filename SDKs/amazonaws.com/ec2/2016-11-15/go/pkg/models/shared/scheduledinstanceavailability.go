package shared

import (
	"time"
)

// ScheduledInstanceAvailability
// Describes a schedule that is available for your Scheduled Instances.
type ScheduledInstanceAvailability struct {
	AvailabilityZone            *string
	AvailableInstanceCount      *int64
	FirstSlotStartTime          *time.Time
	HourlyPrice                 *string
	InstanceType                *string
	MaxTermDurationInDays       *int64
	MinTermDurationInDays       *int64
	NetworkPlatform             *string
	Platform                    *string
	PurchaseToken               *string
	Recurrence                  *ScheduledInstanceRecurrence
	SlotDurationInHours         *int64
	TotalScheduledInstanceHours *int64
}
