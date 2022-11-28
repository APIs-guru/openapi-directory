package shared

import (
	"time"
)

// FleetData
// Describes an EC2 Fleet.
type FleetData struct {
	ActivityStatus                   *FleetActivityStatusEnum
	ClientToken                      *string
	Context                          *string
	CreateTime                       *time.Time
	Errors                           []DescribeFleetError
	ExcessCapacityTerminationPolicy  *FleetExcessCapacityTerminationPolicyEnum
	FleetID                          *string
	FleetState                       *FleetStateCodeEnum
	FulfilledCapacity                *float64
	FulfilledOnDemandCapacity        *float64
	Instances                        []DescribeFleetsInstances
	LaunchTemplateConfigs            []FleetLaunchTemplateConfig
	OnDemandOptions                  *OnDemandOptions
	ReplaceUnhealthyInstances        *bool
	SpotOptions                      *SpotOptions
	Tags                             []Tag
	TargetCapacitySpecification      *TargetCapacitySpecification
	TerminateInstancesWithExpiration *bool
	Type                             *FleetTypeEnum
	ValidFrom                        *time.Time
	ValidUntil                       *time.Time
}
