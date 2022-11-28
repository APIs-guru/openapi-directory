package shared

// LaunchSpecification
// Describes the launch specification for an instance.
type LaunchSpecification struct {
	AddressingType      *string
	BlockDeviceMappings []BlockDeviceMapping
	EbsOptimized        *bool
	IamInstanceProfile  *IamInstanceProfileSpecification
	ImageID             *string
	InstanceType        *InstanceTypeEnum
	KernelID            *string
	KeyName             *string
	Monitoring          *RunInstancesMonitoringEnabled
	NetworkInterfaces   []InstanceNetworkInterfaceSpecification
	Placement           *SpotPlacement
	RamdiskID           *string
	SecurityGroups      []GroupIdentifier
	SubnetID            *string
	UserData            *string
}
