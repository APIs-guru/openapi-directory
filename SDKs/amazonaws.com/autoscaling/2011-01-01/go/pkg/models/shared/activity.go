package shared

import (
	"time"
)

// Activity
// Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
type Activity struct {
	ActivityID            string
	AutoScalingGroupArn   *string
	AutoScalingGroupName  string
	AutoScalingGroupState *string
	Cause                 string
	Description           *string
	Details               *string
	EndTime               *time.Time
	Progress              *int64
	StartTime             time.Time
	StatusCode            ScalingActivityStatusCodeEnum
	StatusMessage         *string
}
