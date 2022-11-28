package shared

import (
	"time"
)

// SpotInstanceRequest
// Describes a Spot Instance request.
type SpotInstanceRequest struct {
	ActualBlockHourlyPrice       *string
	AvailabilityZoneGroup        *string
	BlockDurationMinutes         *int64
	CreateTime                   *time.Time
	Fault                        *SpotInstanceStateFault
	InstanceID                   *string
	InstanceInterruptionBehavior *InstanceInterruptionBehaviorEnum
	LaunchGroup                  *string
	LaunchSpecification          *LaunchSpecification
	LaunchedAvailabilityZone     *string
	ProductDescription           *RiProductDescriptionEnum
	SpotInstanceRequestID        *string
	SpotPrice                    *string
	State                        *SpotInstanceStateEnum
	Status                       *SpotInstanceStatus
	Tags                         []Tag
	Type                         *SpotInstanceTypeEnum
	ValidFrom                    *time.Time
	ValidUntil                   *time.Time
}
