package shared

type InstanceFleetConfig struct {
	InstanceFleetType      InstanceFleetTypeEnum                    `json:"InstanceFleetType"`
	InstanceTypeConfigs    []InstanceTypeConfig                     `json:"InstanceTypeConfigs"`
	LaunchSpecifications   *InstanceFleetProvisioningSpecifications `json:"LaunchSpecifications"`
	Name                   *string                                  `json:"Name"`
	TargetOnDemandCapacity *int64                                   `json:"TargetOnDemandCapacity"`
	TargetSpotCapacity     *int64                                   `json:"TargetSpotCapacity"`
}
