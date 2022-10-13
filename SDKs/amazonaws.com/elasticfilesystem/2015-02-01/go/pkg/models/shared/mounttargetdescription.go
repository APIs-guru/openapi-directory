package shared

type MountTargetDescription struct {
	AvailabilityZoneID   *string            `json:"AvailabilityZoneId"`
	AvailabilityZoneName *string            `json:"AvailabilityZoneName"`
	FileSystemID         string             `json:"FileSystemId"`
	IPAddress            *string            `json:"IpAddress"`
	LifeCycleState       LifeCycleStateEnum `json:"LifeCycleState"`
	MountTargetID        string             `json:"MountTargetId"`
	NetworkInterfaceID   *string            `json:"NetworkInterfaceId"`
	OwnerID              *string            `json:"OwnerId"`
	SubnetID             string             `json:"SubnetId"`
	VpcID                *string            `json:"VpcId"`
}
