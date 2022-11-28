package shared

// InstanceFleetConfig
// <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
type InstanceFleetConfig struct {
	InstanceFleetType      InstanceFleetTypeEnum                    `json:"InstanceFleetType"`
	InstanceTypeConfigs    []InstanceTypeConfig                     `json:"InstanceTypeConfigs,omitempty"`
	LaunchSpecifications   *InstanceFleetProvisioningSpecifications `json:"LaunchSpecifications,omitempty"`
	Name                   *string                                  `json:"Name,omitempty"`
	TargetOnDemandCapacity *int64                                   `json:"TargetOnDemandCapacity,omitempty"`
	TargetSpotCapacity     *int64                                   `json:"TargetSpotCapacity,omitempty"`
}
