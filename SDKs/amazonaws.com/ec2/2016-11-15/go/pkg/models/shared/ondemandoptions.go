package shared

// OnDemandOptions
// Describes the configuration of On-Demand Instances in an EC2 Fleet.
type OnDemandOptions struct {
	AllocationStrategy         *FleetOnDemandAllocationStrategyEnum
	CapacityReservationOptions *CapacityReservationOptions
	MaxTotalPrice              *string
	MinTargetCapacity          *int64
	SingleAvailabilityZone     *bool
	SingleInstanceType         *bool
}
