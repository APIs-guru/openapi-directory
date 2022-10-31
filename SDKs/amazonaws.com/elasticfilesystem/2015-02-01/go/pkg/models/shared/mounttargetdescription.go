package shared



type MountTargetDescription struct {
    AvailabilityZoneID *string `json:"AvailabilityZoneId,omitempty"`
    AvailabilityZoneName *string `json:"AvailabilityZoneName,omitempty"`
    FileSystemID string `json:"FileSystemId"`
    IPAddress *string `json:"IpAddress,omitempty"`
    LifeCycleState LifeCycleStateEnum `json:"LifeCycleState"`
    MountTargetID string `json:"MountTargetId"`
    NetworkInterfaceID *string `json:"NetworkInterfaceId,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    SubnetID string `json:"SubnetId"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

