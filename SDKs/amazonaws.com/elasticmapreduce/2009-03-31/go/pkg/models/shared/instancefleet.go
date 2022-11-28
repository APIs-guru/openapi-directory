package shared

// InstanceFleet
// <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
type InstanceFleet struct {
	ID                          *string                                  `json:"Id,omitempty"`
	InstanceFleetType           *InstanceFleetTypeEnum                   `json:"InstanceFleetType,omitempty"`
	InstanceTypeSpecifications  []InstanceTypeSpecification              `json:"InstanceTypeSpecifications,omitempty"`
	LaunchSpecifications        *InstanceFleetProvisioningSpecifications `json:"LaunchSpecifications,omitempty"`
	Name                        *string                                  `json:"Name,omitempty"`
	ProvisionedOnDemandCapacity *int64                                   `json:"ProvisionedOnDemandCapacity,omitempty"`
	ProvisionedSpotCapacity     *int64                                   `json:"ProvisionedSpotCapacity,omitempty"`
	Status                      *InstanceFleetStatus                     `json:"Status,omitempty"`
	TargetOnDemandCapacity      *int64                                   `json:"TargetOnDemandCapacity,omitempty"`
	TargetSpotCapacity          *int64                                   `json:"TargetSpotCapacity,omitempty"`
}
