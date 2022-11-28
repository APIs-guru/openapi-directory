package shared

import (
	"time"
)

// ScheduledUpdateGroupAction
// Describes a scheduled scaling action.
type ScheduledUpdateGroupAction struct {
	AutoScalingGroupName *string
	DesiredCapacity      *int64
	EndTime              *time.Time
	MaxSize              *int64
	MinSize              *int64
	Recurrence           *string
	ScheduledActionArn   *string
	ScheduledActionName  *string
	StartTime            *time.Time
	Time                 *time.Time
	TimeZone             *string
}
