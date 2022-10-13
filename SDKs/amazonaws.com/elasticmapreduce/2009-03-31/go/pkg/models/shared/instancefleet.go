package shared

type InstanceFleet struct {
	ID                          *string                                  `json:"Id"`
	InstanceFleetType           *InstanceFleetTypeEnum                   `json:"InstanceFleetType"`
	InstanceTypeSpecifications  []InstanceTypeSpecification              `json:"InstanceTypeSpecifications"`
	LaunchSpecifications        *InstanceFleetProvisioningSpecifications `json:"LaunchSpecifications"`
	Name                        *string                                  `json:"Name"`
	ProvisionedOnDemandCapacity *int64                                   `json:"ProvisionedOnDemandCapacity"`
	ProvisionedSpotCapacity     *int64                                   `json:"ProvisionedSpotCapacity"`
	Status                      *InstanceFleetStatus                     `json:"Status"`
	TargetOnDemandCapacity      *int64                                   `json:"TargetOnDemandCapacity"`
	TargetSpotCapacity          *int64                                   `json:"TargetSpotCapacity"`
}
