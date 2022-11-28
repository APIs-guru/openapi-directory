package shared

import (
	"time"
)

// InstanceRefresh
// Describes an instance refresh for an Auto Scaling group.
type InstanceRefresh struct {
	AutoScalingGroupName *string
	DesiredConfiguration *DesiredConfiguration
	EndTime              *time.Time
	InstanceRefreshID    *string
	InstancesToUpdate    *int64
	PercentageComplete   *int64
	Preferences          *RefreshPreferences
	ProgressDetails      *InstanceRefreshProgressDetails
	StartTime            *time.Time
	Status               *InstanceRefreshStatusEnum
	StatusReason         *string
}
