package shared



type InstanceFleet struct {
    ID *string `json:"Id,omitempty"`
    InstanceFleetType *InstanceFleetTypeEnum `json:"InstanceFleetType,omitempty"`
    InstanceTypeSpecifications []InstanceTypeSpecification `json:"InstanceTypeSpecifications,omitempty"`
    LaunchSpecifications *InstanceFleetProvisioningSpecifications `json:"LaunchSpecifications,omitempty"`
    Name *string `json:"Name,omitempty"`
    ProvisionedOnDemandCapacity *int64 `json:"ProvisionedOnDemandCapacity,omitempty"`
    ProvisionedSpotCapacity *int64 `json:"ProvisionedSpotCapacity,omitempty"`
    Status *InstanceFleetStatus `json:"Status,omitempty"`
    TargetOnDemandCapacity *int64 `json:"TargetOnDemandCapacity,omitempty"`
    TargetSpotCapacity *int64 `json:"TargetSpotCapacity,omitempty"`
    
}

