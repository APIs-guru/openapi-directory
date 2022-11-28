package shared

import (
	"time"
)

// LaunchTemplateSpotMarketOptions
// The options for Spot Instances.
type LaunchTemplateSpotMarketOptions struct {
	BlockDurationMinutes         *int64
	InstanceInterruptionBehavior *InstanceInterruptionBehaviorEnum
	MaxPrice                     *string
	SpotInstanceType             *SpotInstanceTypeEnum
	ValidUntil                   *time.Time
}
