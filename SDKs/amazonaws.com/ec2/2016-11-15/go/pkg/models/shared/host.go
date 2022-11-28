package shared

import (
	"time"
)

// Host
// Describes the properties of the Dedicated Host.
type Host struct {
	AllocationTime                     *time.Time
	AllowsMultipleInstanceTypes        *AllowsMultipleInstanceTypesEnum
	AutoPlacement                      *AutoPlacementEnum
	AvailabilityZone                   *string
	AvailabilityZoneID                 *string
	AvailableCapacity                  *AvailableCapacity
	ClientToken                        *string
	HostID                             *string
	HostProperties                     *HostProperties
	HostRecovery                       *HostRecoveryEnum
	HostReservationID                  *string
	Instances                          []HostInstance
	MemberOfServiceLinkedResourceGroup *bool
	OwnerID                            *string
	ReleaseTime                        *time.Time
	State                              *AllocationStateEnum
	Tags                               []Tag
}
