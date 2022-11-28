package shared

import (
	"time"
)

// CapacityReservation
// Describes a Capacity Reservation.
type CapacityReservation struct {
	AvailabilityZone       *string
	AvailabilityZoneID     *string
	AvailableInstanceCount *int64
	CapacityReservationArn *string
	CapacityReservationID  *string
	CreateDate             *time.Time
	EbsOptimized           *bool
	EndDate                *time.Time
	EndDateType            *EndDateTypeEnum
	EphemeralStorage       *bool
	InstanceMatchCriteria  *InstanceMatchCriteriaEnum
	InstancePlatform       *CapacityReservationInstancePlatformEnum
	InstanceType           *string
	OutpostArn             *string
	OwnerID                *string
	StartDate              *time.Time
	State                  *CapacityReservationStateEnum
	Tags                   []Tag
	Tenancy                *CapacityReservationTenancyEnum
	TotalInstanceCount     *int64
}
