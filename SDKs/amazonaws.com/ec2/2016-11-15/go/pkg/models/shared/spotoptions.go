package shared

// SpotOptions
// Describes the configuration of Spot Instances in an EC2 Fleet.
type SpotOptions struct {
	AllocationStrategy           *SpotAllocationStrategyEnum
	InstanceInterruptionBehavior *SpotInstanceInterruptionBehaviorEnum
	InstancePoolsToUseCount      *int64
	MaintenanceStrategies        *FleetSpotMaintenanceStrategies
	MaxTotalPrice                *string
	MinTargetCapacity            *int64
	SingleAvailabilityZone       *bool
	SingleInstanceType           *bool
}
