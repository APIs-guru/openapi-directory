package shared



type InstanceFleetConfig struct {
    InstanceFleetType InstanceFleetTypeEnum `json:"InstanceFleetType"`
    InstanceTypeConfigs []InstanceTypeConfig `json:"InstanceTypeConfigs,omitempty"`
    LaunchSpecifications *InstanceFleetProvisioningSpecifications `json:"LaunchSpecifications,omitempty"`
    Name *string `json:"Name,omitempty"`
    TargetOnDemandCapacity *int64 `json:"TargetOnDemandCapacity,omitempty"`
    TargetSpotCapacity *int64 `json:"TargetSpotCapacity,omitempty"`
    
}

