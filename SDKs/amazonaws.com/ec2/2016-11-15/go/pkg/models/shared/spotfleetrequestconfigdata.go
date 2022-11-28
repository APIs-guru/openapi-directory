package shared

import (
	"time"
)

// SpotFleetRequestConfigData
// Describes the configuration of a Spot Fleet request.
type SpotFleetRequestConfigData struct {
	AllocationStrategy               *AllocationStrategyEnum
	ClientToken                      *string
	Context                          *string
	ExcessCapacityTerminationPolicy  *ExcessCapacityTerminationPolicyEnum
	FulfilledCapacity                *float64
	IamFleetRole                     string
	InstanceInterruptionBehavior     *InstanceInterruptionBehaviorEnum
	InstancePoolsToUseCount          *int64
	LaunchSpecifications             []SpotFleetLaunchSpecification
	LaunchTemplateConfigs            []LaunchTemplateConfig
	LoadBalancersConfig              *LoadBalancersConfig
	OnDemandAllocationStrategy       *OnDemandAllocationStrategyEnum
	OnDemandFulfilledCapacity        *float64
	OnDemandMaxTotalPrice            *string
	OnDemandTargetCapacity           *int64
	ReplaceUnhealthyInstances        *bool
	SpotMaintenanceStrategies        *SpotMaintenanceStrategies
	SpotMaxTotalPrice                *string
	SpotPrice                        *string
	TagSpecifications                []TagSpecification
	TargetCapacity                   int64
	TerminateInstancesWithExpiration *bool
	Type                             *FleetTypeEnum
	ValidFrom                        *time.Time
	ValidUntil                       *time.Time
}
